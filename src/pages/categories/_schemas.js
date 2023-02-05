import * as Yup from 'yup';

export const categorySchema = ({ name = '', description = '' } = {}) => ({
  schema: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    description: Yup.string()
      .min(3, 'Minimum 15 characters')
      .max(50, 'Maximum 300 characters')
      .required('Description is required'),
  }),
  initialValues: {
    name,
    description,
  },
});

export default null;
