/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import PropTypes from 'prop-types';

function FormTextArea({
  name, label, formik, placeholder, vertical,
}) {
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
        <textarea
          rows={3}
          placeholder={placeholder}
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
          autoComplete="off"
        />
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-700 text-sm mx-auto">
          <span role="alert">{formik.errors[name]}</span>
        </div>
      )}
    </div>
  );
}
FormTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  vertical: PropTypes.bool,
};
FormTextArea.defaultProps = {
  placeholder: '',
  vertical: false,
};
export default FormTextArea;
