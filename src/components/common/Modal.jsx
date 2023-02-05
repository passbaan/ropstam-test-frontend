import PropTypes from 'prop-types';
import { Modal } from 'antd';

function ModalComponent({
  visible, setVisible, children, afterClose, minHeight,
}) {
  return (
    <>
      <style>
        {`
          .ant-modal-content{
            min-height: 4rem;
            background-color: rgb(250 250 249);
          }
          .ant-modal-body{
            height: 100%;
          }
        `}

      </style>
      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        wrapClassName="bg-orange-500 bg-opacity-10"
        width="80%"
        style={{ minHeight: minHeight || '80%' }}
        footer={null}
        maskClosable={false}
        afterClose={afterClose}
      >
        {children}
      </Modal>

    </>
  );
}
ModalComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  //
  afterClose: PropTypes.func,
  minHeight: PropTypes.string,
};
ModalComponent.defaultProps = {
  afterClose: () => { },
  minHeight: '80%',
};

export default ModalComponent;
