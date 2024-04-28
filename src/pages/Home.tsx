import React, { useState } from 'react';
import { getApiExhibitionList } from '@src/apis';
import { ExhibitionWishlistView } from '@components/ExhibitionWishlistView';
import { IExhibitionInfo } from '@../../types/index';
import { Flex } from 'antd';

const Home = () => {
  const [exhibitionList, setExhibitionList] = useState<IExhibitionInfo[]>([]);

  const fetchData = async () => {
    // 초기 전시회 리스트만 불러오기 설정.
    try {
      const resData = await getApiExhibitionList();
      setExhibitionList(resData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex justify="center">
      <Flex vertical={true}>
        {exhibitionList.map((exhibtionData) => {
          return <ExhibitionWishlistView viewData={exhibtionData} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Home;
