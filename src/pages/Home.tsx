import React, { useState } from 'react';
import { getApiExhibitionList } from '@src/apis';
import { ExhibitionWishlistView } from '@components/ExhibitionWishlistView';
import { IExhibitionInfo } from '@../../types/index';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { ReactComponent as ExhibitionIcon } from '@assets/icons/ExhibitionLogo.svg';
import { Flex } from 'antd';
import styled from 'styled-components';
import { useExhibitionStore } from '@src/Store';

const Home = () => {
  const { wishExhibitionList } = useExhibitionStore();
  const [exhibitionList, setExhibitionList] = useState<IExhibitionInfo[]>([]);
  const [isWish, setIsWish] = useState<boolean>(false);

  const fetchData = async () => {
    // 초기 전시회 리스트만 불러오기 설정.
    try {
      const resData = await getApiExhibitionList();

      if (isWish) {
        const favoriteExhibitions = resData.filter((item) => wishExhibitionList.includes(item.id));
        setExhibitionList(favoriteExhibitions);
      } else {
        setExhibitionList(resData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [isWish]);

  return (
    <>
      <Flex justify="center">
        <Flex vertical={true}>
          {exhibitionList.map((exhibtionData) => {
            return <ExhibitionWishlistView key={exhibtionData.id} viewData={exhibtionData} />;
          })}
        </Flex>
      </Flex>
      <Flex justify="center">
        <Footer>
          <ExhibitionIcon
            onClick={() => {
              setIsWish(false);
            }}
          />
          전시회
        </Footer>
        <Footer>
          <FilledStarIcon
            onClick={() => {
              setIsWish(true);
            }}
          />
          찜목록
        </Footer>
      </Flex>
    </>
  );
};
const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 195px;
  height: 79px;
  top: 765px;
`;

export default Home;
