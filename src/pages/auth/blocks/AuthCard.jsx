import clsx from 'clsx';
import PropTypes from 'prop-types';

function AuthCard({ children, title, centered }) {
  return (
    <div className="mx-auto w-96 h-96 bg-orange-200 mt-4 p-3 rounded shadow-lg text-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className={clsx(
        'w-full h-full',
        { 'grid place-items-center': centered },
      )}
      >
        {children}
      </div>

    </div>
  );
}
AuthCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};
AuthCard.defaultProps = {
  centered: false,
};
export default AuthCard;
