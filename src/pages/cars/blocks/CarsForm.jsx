/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { FormInput, FormSubmit } from '../../../components/common';
import CategoriesDropdown from './CategoriesDropdown';
import { carsSchema } from '../_schemas';
import { useApiContext } from '../../../contexts/api.context';

function CarsForm({ car, done }) {
  const { api } = useApiContext();
  const updateAction = async (vals, { setStatus, setSubmitting, resetForm }) => {
    setStatus('Submitting...');
    setSubmitting(true);
    let data = { errors: 'could not perform api call' };
    if (!car) {
      const reponse = await api.post('/cars', vals);
      data = reponse.data;
    } else {
      const reponse = await api.put(`/cars/${car._id}`, vals);
      data = reponse.data;
    }
    setSubmitting(false);
    if (data.error) {
      setStatus(data.error[0].message);
      return false;
    }
    resetForm();
    done();
    return true;
  };
  const initialValues = useMemo(() => ({
    company: car?.company || '',
    model: car?.model || '',
    color: car?.color || '',
    year: car?.year || '',
    regNumber: car?.regNumber || '',
    category: car?.category || '',
  }), [car]);

  const formik = useFormik({
    initialValues,
    validationSchema: carsSchema,
    onSubmit: updateAction,
    enableReinitialize: true,
  });
  //
  return (
    <form className="flex flex-col gap-3 my-auto" noValidate onSubmit={formik.handleSubmit}>
      <div className="text-xs text-stone-500">{formik.status}</div>
      <FormInput vertical formik={formik} name="company" type="text" label="Car Company Name" placeholder="Please input car company name!" />
      <FormInput vertical formik={formik} name="model" type="text" label="Car Model Name" placeholder="Please input car model name!" />
      <FormInput vertical formik={formik} name="color" type="text" label="Car Color" placeholder="Please input car color!" />
      <FormInput vertical formik={formik} name="year" type="text" label="Car Make Year" placeholder="Please input car make year!" />
      <FormInput vertical formik={formik} name="regNumber" type="text" label="Car Registeration Number" placeholder="Please input car registeration number!" />
      <CategoriesDropdown formik={formik} name="category" label="Car Category" placeholder="Please select car category!" />
      <FormSubmit formik={formik} text={car ? 'Update' : 'Create'} />
    </form>
  );
}
CarsForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  car: PropTypes.any,
  done: PropTypes.func.isRequired,
};
CarsForm.defaultProps = {
  car: null,
};

export default CarsForm;
