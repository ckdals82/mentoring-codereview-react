import { Button, Col, Image, Modal, Row } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as BackButton } from '@assets/icons/BackButton.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getDetailExhibition } from '@src/apis';
import BookingModal from '@components/BookingModal';

const Ticket = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const id = [...searchParams][0][1];

  const fetchData = async () => {
    try {
      const exhibitionInfo = await getDetailExhibition({ id: Number(id) });

      console.log(exhibitionInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      <BackButtonContainer>
        <BackButton
          onClick={() => {
            navigate('/');
          }}
        />
        예매하기
      </BackButtonContainer>
      {/* <Image url={}></Image> */}
      <BookingModal open={isModalOpen} onClose={handleModalClose} />
      <Button onClick={() => setIsModalOpen(true)}>예매하기</Button>
    </Row>
  );
};

export default Ticket;

const BackButtonContainer = styled.div`
  /* width: 100%; */
  width: 390px;
  height: 64px;
  padding-top: 19px;
  padding-left: 12px;
`;
const ImageBox = styled.img`
  width: 390px;
  height: 390px;
  border-radius: 8px;
`;
