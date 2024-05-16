import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TicketButtonProps {
  cancel?: boolean;
}

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
        <TicketButton
          onClick={() => {
            navigate('/');
          }}
        >
          확인
        </TicketButton>
      ) : (
        <>
          <TicketButton
            onClick={() => {
              setIsBooked(true);
            }}
          >
            확인
          </TicketButton>
          <TicketButton cancel={true} onClick={handleModalClose}>
            취소
          </TicketButton>
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

const TicketButton = styled.button<TicketButtonProps>`
  width: 100%;
  height: 59px;
  border-radius: 4px;
  border-color: white;
  background-color: ${(props) => (props.cancel ? '#FFFFFF' : '#ffbf66')};
  color: ${(props) => (props.cancel ? '#ffbf66' : 'white')};
`;
