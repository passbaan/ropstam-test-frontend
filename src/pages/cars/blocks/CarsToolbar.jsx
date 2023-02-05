import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function CarsToolbar({ onAdd, count }) {
  return (
    <div className="w-full my-2 flex justify-between border-b pb-2 border-black">
      <h3 className="font-bold text-xl">
        All Cars (
        {count}
        )
      </h3>
      <button
        type="button"
        className="flex items-center gap-2 rounded bg-orange-500 px-4 py-1 text-white"
        onClick={() => onAdd()}
      >
        <Icon icon="material-symbols:add" className="text-xl" />
        <span>Add a Car</span>
      </button>
    </div>
  );
}
CarsToolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
export default CarsToolbar;
