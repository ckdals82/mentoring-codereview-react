import styled from 'styled-components';
import { Button, Col, Flex, Typography } from 'antd';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { ReactComponent as EmptyStarIcon } from '@assets/icons/EmptyStar.svg';
import { IExhibitionInfo } from '@../../types/index';
import { useExhibitionStore } from '@src/Store';
import { useNavigate } from 'react-router-dom';

export const ExhibitionWishlistView = (props: { viewData: IExhibitionInfo }) => {
  const {
    id: exhibitionId,
    place: placeName,
    imageUrl: imgUrl,
    price: exhibitionPrice,
    title: exhibitionTitle,
    date: { started: displayStart, ended: displayEnd },
  } = props.viewData;

  const navigate = useNavigate();

  // const placeName = viewData.place
  const { wishExhibitionList, addWishtExhibitionList, deleteWishExhibitionList } =
    useExhibitionStore();

  const isWishExhibition = wishExhibitionList.includes(exhibitionId);

  // 찜하기 기능 함수.
  const handleWishExhibitionOnClick = () => {
    if (isWishExhibition) {
      deleteWishExhibitionList(exhibitionId);
    } else if (!isWishExhibition) {
      addWishtExhibitionList(exhibitionId);
    }
  };

  return (
    <>
      <ListContainer>
        <ImageBox src={imgUrl} alt="Image" />
        <ExhibitionInfo>
          <Flex justify="space-between">
            <Typography>{exhibitionTitle}</Typography>
            <div onClick={handleWishExhibitionOnClick}>
              {isWishExhibition ? <FilledStarIcon /> : <EmptyStarIcon />}
            </div>
          </Flex>
          <Col span={24}>{placeName}</Col>
          <Col span={24}>{exhibitionPrice}</Col>
          <Col span={24}>
            <Flex justify="space-between">
              <div>
                {displayStart}~{displayEnd}
              </div>
              <div>
                <TicketButton onClick={() => navigate(`/ticket?id=${exhibitionId}`)}>
                  예매하기
                </TicketButton>
              </div>
            </Flex>
          </Col>
        </ExhibitionInfo>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  text-align: left;
  display: flex;
  /* width: 100%; */
  width: 374px;
  height: 80px;
  padding: 8px;
`;

const ImageBox = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const ExhibitionInfo = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const TicketButton = styled.button`
  width: 40px;
  height: 16px;
  border-radius: 4px;
  font-size: 8px;
  text-align: center;
  padding: 0px;
`;
