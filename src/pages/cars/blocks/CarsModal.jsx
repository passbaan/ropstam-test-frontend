import PropTypes from 'prop-types';
import { ModalComponent } from '../../../components/common';
import CarsForm from './CarsForm';
//
function CarsModal({
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
        {`${editId ? 'Update' : 'Create'} Car`}
        {
          visible && (
          <CarsForm
            car={editId}
            done={() => {
              setVisible(false);
              refetch();
            }}
          />
          )
        }
      </div>
    </ModalComponent>
  );
}
CarsModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  editId: PropTypes.any,
  setEditId: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
CarsModal.defaultProps = {
  editId: null,
};
export default CarsModal;
