import PropTypes from 'prop-types';
import { ModalComponent } from '../../../components/common';
import CatForm from './CatForm';

function CatModal({
  visible,
  setVisible,
  editId,
  setEditId,
  refetch,
}) {
  const afterClose = () => {
    setEditId(null);
  };
  return (
    <ModalComponent visible={visible} setVisible={setVisible} afterClose={afterClose}>
      <div className="fon-bold">
        {`${editId ? 'Update' : 'Create'} Category`}
        <CatForm
          category={editId}
          done={() => { setVisible(false); setEditId(null); refetch(); }}
        />
      </div>
    </ModalComponent>
  );
}
CatModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  editId: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  setEditId: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
CatModal.defaultProps = {
  editId: null,
};
export default CatModal;
