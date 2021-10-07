import {Modal} from 'antd';
import {
  CardBtn,
} from '../../styled/components/lists/SubscriptionList';
import {useState} from 'react';
import {useSelector} from 'react-redux';

export const UpgradeSubscriptionModal = ({onUpdate, subscription}) => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);

    await onUpdate({
      proration_behavior: 'always_invoice',
      items: [
        {
          id: currentSubscription.item,
          price: subscription.id,
        }],
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
      <>
        <CardBtn onClick={showModal}>
          Upgrade
        </CardBtn>
        <Modal centered={true} title="Upgrade subscription"
               width={350}
               visible={isModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
          <p>
            When you upgrade your subscription, you will be charged the
            difference in the subscription price.
          </p>
        </Modal>
      </>
  );
};