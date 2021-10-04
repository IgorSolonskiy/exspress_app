import {Modal, Button} from 'antd';
import {useState} from 'react';
import {
  CancelModalDate, CancelModalDescription,
  CancelModalWrapper,
} from '../../styled/components/lists/SubscriptionList';

export const UpdateSubscriptionModal = ({
                                          currentSubscription,
                                          onUpdateSubscription,
                                        }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await onUpdateSubscription(
        {cancel_at_period_end: !currentSubscription.cancel_at_period_end});
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const btnControl = currentSubscription.cancel_at_period_end ?
      <Button type="primary" onClick={showModal}>
        Renew
      </Button> :
      <Button type="danger" onClick={showModal}>
        Unsubscribe
      </Button>;

  const modalControl = currentSubscription.cancel_at_period_end ?
      <Modal centered={true} title="Renew subscription" width={350}
             visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <CancelModalWrapper>
          <p>Don't cancel subscription.</p>
        </CancelModalWrapper>
      </Modal>
      :
      <Modal centered={true} title="Cancel subscription" width={350}
             visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <CancelModalWrapper>
          <p>Cancel</p>
          <CancelModalDescription>End of the current
            period <CancelModalDate>{currentSubscription.current_period_end}</CancelModalDate></CancelModalDescription>
        </CancelModalWrapper>
      </Modal>;

  return (
      <>
        {btnControl}
        {modalControl}
      </>
  );
};