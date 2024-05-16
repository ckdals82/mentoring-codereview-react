import { Button, Col, Flex, Image, Modal, Row } from 'antd';
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
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [date, setDate] = useState<any>({ started: '', ended: '' });
  const [price, setPrice] = useState<number>(0);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const id = [...searchParams][0][1];

  const fetchData = async () => {
    const exhibitionInfo = await getDetailExhibition({ id: Number(id) });
    try {
      if (!(exhibitionInfo instanceof Error)) {
        const exhibitionImgurl = exhibitionInfo.imageUrl;
        const exhibitonTitle = exhibitionInfo.title;
        const exhibitonPlace = exhibitionInfo.place;
        const exhibitonDate = exhibitionInfo.date;
        const exhibitionPrice = exhibitionInfo.price;
        // imageUrl을 사용하는 나머지 로직

        setImageUrl(exhibitionImgurl);
        setTitle(exhibitonTitle);
        setPlace(exhibitonPlace);
        setDate(exhibitonDate);
        setPrice(exhibitionPrice);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex vertical={true} align="center">
      <BackButtonContainer>
        <BackButton
          onClick={() => {
            navigate('/');
          }}
        />
        <TicketTitleContainer>
          <TicketTilte>예매하기</TicketTilte>
        </TicketTitleContainer>
      </BackButtonContainer>
      <ImageBox>
        <Image width={390} height={390} src={imageUrl} />
      </ImageBox>
      <BookingModal open={isModalOpen} onClose={handleModalClose} />
      <TicketContent>
        <TitleContainer>
          <ExhibitionTilte>{title}</ExhibitionTilte>
        </TitleContainer>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <ExhibitionPrice>{price}</ExhibitionPrice>
        </Col>

        <ExhibitionPlace>{place}</ExhibitionPlace>
        <Col span={24}>
          <ExhibitionPlace>
            {date.started} ~ {date.ended}
          </ExhibitionPlace>
        </Col>
      </TicketContent>
      <div style={{ width: '390px' }}>
        <TicketButton onClick={() => setIsModalOpen(true)}>예매하기</TicketButton>
      </div>
    </Flex>
  );
};

export default Ticket;

const BackButtonContainer = styled.div`
  width: 390px;
  height: 64px;
  padding-top: 19px;
  padding-left: 12px;
  display: flex;
  align-items: center;
`;

const TicketTitleContainer = styled.div`
  margin-left: 10px;
`;

const TicketTilte = styled.span`
  font-weight: 600px;
  font-size: 20px;
  line-height: 26px;
`;

const ImageBox = styled.div`
  width: 390px;
  height: 390px;
`;
const TicketContent = styled.div`
  padding: 12px;
  width: 390px;
  height: 140px;
`;

const TicketButton = styled.button`
  width: 100%;
  height: 59px;
  border-radius: 4px;
  border-color: #ffbf66;
  background-color: #ffbf66;
  /* margin-left: 12px; */
  color: white;
`;

const ExhibitionTilte = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 38.4px;
  text-align: left;
`;

const TitleContainer = styled.div`
  height: 38px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 10px;
`;
const ExhibitionPrice = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #ea3800;
`;
const ExhibitionPlace = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  text-align: left;
`;
const ExhibitionDate = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  text-align: left;
`;
