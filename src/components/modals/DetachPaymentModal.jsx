import {useState} from 'react';
import {Modal, Button} from 'antd';

export const DetachPaymentModal = ({onDetachPaymentMethod}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await onDetachPaymentMethod();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
      <>
        <Button style={{marginTop: '10px'}} type="danger" onClick={showModal}>
          Delete
        </Button>
        <Modal okText={'Remove'} okType={'danger'} oc width={300}
               centered={true} title="Remove payment method"
               visible={isModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
          <p>The payment method will no longer be usable after removing from the
            customer.</p>
        </Modal>
      </>
  );
};