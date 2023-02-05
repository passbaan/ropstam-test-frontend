import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function Single({
  id, name, onEdit, description, onDelete,
}) {
  return (
    <div className="flex w-48 min-h-32 bg-orange-400 flex-col p-3 rounded-xl gap-3">
      <div className="font-bold border-b border-black ">{name}</div>
      <div className="text-light text-sm bg-orange-300 p-1 rounded">{description}</div>
      <div className="flex text-lg">
        <div
          className="w-1/2 flex justify-center cursor-pointer hover:bg-orange-300 rounded-2xl"
          onClick={() => onEdit(id)}
          onKeyUp={() => onEdit(id)}
        >
          <Icon icon="material-symbols:edit" className="text-stone-800" />
        </div>
        <div
          className="w-1/2 flex justify-center cursor-pointer hover:bg-orange-300 rounded-2xl"
          onClick={() => onDelete(id)}
          onKeyUp={() => onDelete(id)}
        >
          <Icon icon="mdi:delete" className="text-red-500" />
        </div>
      </div>
    </div>
  );
}
Single.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Single;
