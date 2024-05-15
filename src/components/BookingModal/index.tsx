import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingModal = (props: { open: boolean; onClose: Function }) => {
  const { open, onClose } = props;
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    onClose();
  };

  const customFooter = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isBooked ? (
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          확인
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setIsBooked(true);
            }}
          >
            확인
          </button>
          <button onClick={handleModalClose}>취소</button>
        </>
      )}
    </div>
  );

  return (
    <Modal open={open} footer={customFooter}>
      {isBooked ? (
        <p>예매가 완료되었습니다</p>
      ) : (
        <>
          <p>티켓을 예매하시겠습니까?</p>
          <p>예매 내역은 이메일로 전송됩니다.</p>
        </>
      )}
    </Modal>
  );
};

export default BookingModal;
