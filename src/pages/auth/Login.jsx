import { useFormik } from 'formik';
import { loginSchema } from './_schemas';
import { AuthCard } from './blocks';
import { FormInput, FormSubmit } from '../../components/common/forms';
import { useAuthContext } from '../../contexts/auth.context';
import { useApiContext } from '../../contexts/api.context';

function Login() {
  const authContext = useAuthContext();
  const { api } = useApiContext();
  const loginAction = async (vals, { setStatus, setSubmitting, resetForm }) => {
    setSubmitting(true);
    setStatus('Logging in...');
    const response = await api.post('/auth/login', vals);
    const { data } = response;
    if (data.error) {
      setStatus(data.error[0].message);
      setSubmitting(false);
      return false;
    }
    setStatus('Logged in!');
    setSubmitting(false);
    resetForm();
    authContext.login(data.accessToken);
    return true;
  };
  //
  const formik = useFormik({
    initialValues: loginSchema.initialValues,
    validationSchema: loginSchema.schema,
    onSubmit: loginAction,
  });

  return (
    <div className="w-100 flex flex-col">
      <AuthCard title="Login" centered>
        <form className="flex flex-col gap-3 my-auto" noValidate onSubmit={formik.handleSubmit}>
          <div className="text-xs text-stone-500">{formik.status}</div>
          <FormInput formik={formik} name="email" type="email" label="Email" placeholder="Please input email!" />
          <FormInput formik={formik} name="password" type="password" label="Password" placeholder="Please input password" />
          <FormSubmit formik={formik} text="Login" />
        </form>
      </AuthCard>
    </div>
  );
}
export default Login;
