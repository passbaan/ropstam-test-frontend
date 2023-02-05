/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { FormInput, FormSubmit, FormTextArea } from '../../../components/common';
import { categorySchema } from '../_schemas';
import { useApiContext } from '../../../contexts/api.context';

function CatForm({ category, done }) {
  const { api } = useApiContext();
  const updateAction = async (vals, { setStatus, setSubmitting, resetForm }) => {
    setStatus('Submitting...');
    setSubmitting(true);
    let data = { errors: 'could not perform api call' };
    if (!category) {
      const reponse = await api.post('/categories', vals);
      data = reponse.data;
    } else {
      const reponse = await api.put(`/categories/${category._id}`, vals);
      data = reponse.data;
    }
    setSubmitting(false);
    if (data.errors) {
      setStatus(data.errors);
      return false;
    }
    resetForm();
    done();
    return true;
  };
  const schema = categorySchema({ name: category?.name, description: category?.description });
  const formik = useFormik({
    initialValues: schema.initialValues,
    validationSchema: schema.schema,
    onSubmit: updateAction,
    enableReinitialize: true,
  });
  return (
    <form className="flex flex-col gap-3 my-auto" noValidate onSubmit={formik.handleSubmit}>
      <div className="text-xs text-stone-500">{formik.status}</div>
      <FormInput vertical formik={formik} name="name" type="text" label="Name" placeholder="Please input email!" />
      <FormTextArea vertical formik={formik} name="description" label="Description" placeholder="Please input password" />
      <FormSubmit formik={formik} text={category ? 'Update' : 'Create'} />
    </form>
  );
}
CatForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  done: PropTypes.func.isRequired,
};
CatForm.defaultProps = {
  category: null,
};

export default CatForm;
