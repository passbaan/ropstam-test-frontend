/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useApiContext } from '../../../contexts/api.context';

function CategoriesDropdown({
  formik, name, vertical, placeholder, label,
}) {
  const [options, setOptions] = useState([]);
  const { api } = useApiContext();
  const getCategories = async () => {
    const { data: { data: categories } } = await api.get('/categories?offset=0&limit=100');
    setOptions(categories.map(({ _id: value, name: labelName }) => ({
      value,
      label: labelName,
    })));
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex flex-wrap px-4">
      {
        vertical && (
          <label htmlFor={name} className="text-dark w-full grid place-items-start font-semibold">
            {label}
          </label>
        )
      }
      <div className="flex gap-3 w-full">
        {
          !vertical && (
            <label htmlFor={name} className="text-dark w-28 grid place-items-center font-semibold">
              {label}
            </label>
          )
        }
        <select
          {...formik.getFieldProps(name)}
          className={clsx(
            'w-full p-2 rounded border border-stone-200',
            {
              'border-2 border-red-700':
                formik.touched[name] && formik.errors[name],
            },
            {
              'border-2 border-green-700': formik.touched[name] && !formik.errors[name],
            },
            {
              'disabled:opacity-50': formik.isSubmitting,
            },
          )}
          disabled={formik.isSubmitting}
        >
          <option value="">{placeholder}</option>
          {
            options.map(({ value, label: labelName }) => (
              <option key={value} value={value}>{labelName}</option>
            ))
          }
        </select>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-700 text-sm mx-auto">
          <span role="alert">{formik.errors[name]}</span>
        </div>
      )}
    </div>
  );
}
CategoriesDropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};
CategoriesDropdown.defaultProps = {
  placeholder: '',
  vertical: false,
};
export default CategoriesDropdown;
