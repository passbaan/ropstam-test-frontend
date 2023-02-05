/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import clsx from 'clsx';

function FormSubmit({ formik, text }) {
  return (
    <input
      disabled={formik.isSubmitting}
      type="submit"
      value={text}
      className={clsx(
        'bg-orange-400 w-32 mx-auto cursor-pointer text-white rounded-xl px-2 py-1',
        {
          'opacity-50': formik.isSubmitting,
        },
      )}
    />
  );
}
FormSubmit.propTypes = {
  formik: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
export default FormSubmit;
