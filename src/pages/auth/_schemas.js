import * as Yup from 'yup';

export const loginSchema = {
  schema: Yup.object().shape({
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  }),
  initialValues: {
    email: '',
    password: '',
  },
};
export const register = {
  schema: Yup.object().shape({
    firstName: Yup.string()
      .strict()
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('First Name is required'),
    lastName: Yup.string()
      .strict()
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
  }),
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
  },
};

export default {
  loginSchema,
};
