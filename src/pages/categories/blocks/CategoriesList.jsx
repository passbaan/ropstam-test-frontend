import PropTypes from 'prop-types';
import Single from './Single';

function CategoriesList({ categories, onEdit, onDelete }) {
  if (categories.length === 0) {
    return <div>No categories found.</div>;
  }
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <Single
            id={cat._id}
            name={cat.name}
            key={cat._id}
            onEdit={onEdit}
            description={cat.description}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
CategoriesList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default CategoriesList;
