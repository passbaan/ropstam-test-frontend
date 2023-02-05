import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthCard } from './blocks';
import { FormInput, FormSubmit } from '../../components/common/forms';
import { register } from './_schemas';
import { useApiContext } from '../../contexts/api.context';

function Register() {
  const navigate = useNavigate();
  const { api } = useApiContext();
  //
  const registerAction = async (vals, { setStatus, setSubmitting }) => {
    setStatus('Registering...');
    setSubmitting(true);
    const response = await api.post('/auth/register', vals);
    const { data } = response;
    if (data.error) {
      setStatus(data.error[0].message);
      setSubmitting(false);
      return false;
    }
    setStatus('Registered!');
    setSubmitting(false);
    navigate('/auth/login');
    return true;
  };
  //
  const formik = useFormik({
    initialValues: register.initialValues,
    validationSchema: register.schema,
    onSubmit: registerAction,
  });
  return (
    <div className="w-100 flex flex-col">
      <AuthCard title="Login" centered>
        <form className="flex flex-col gap-3 my-auto" noValidate onSubmit={formik.handleSubmit}>
          <div className="text-xs text-stone-500">{formik.status}</div>
          <FormInput vertical formik={formik} name="firstName" type="text" label="First Name" placeholder="Please input first name!" />
          <FormInput vertical formik={formik} name="lastName" type="text" label="Last Name" placeholder="Please input last name!" />
          <FormInput vertical formik={formik} name="email" type="email" label="Email" placeholder="Please input your email!" />
          <FormSubmit formik={formik} text="Register" />
        </form>
      </AuthCard>
    </div>
  );
}
export default Register;
