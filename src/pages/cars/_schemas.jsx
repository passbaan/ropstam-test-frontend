import * as Yup from 'yup';

export const carsSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required.'),
  company: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Company is required.'),
  color: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
  model: Yup.string()
    .min(3, 'Minimum 15 characters')
    .max(50, 'Maximum 300 characters')
    .required('Model is required'),
  year: Yup.number()
    .min(1990, 'Minimum 1990')
    .max(2023, 'Maximum 2023')
    .required('Year is required'),
  regNumber: Yup.string()
    .min(7, 'Minimum 15 characters')
    .max(50, 'Maximum 300 characters'),
});

export default null;
