import React, { useState } from 'react';
import { getApiExhibitionList } from '@src/apis';
import { ExhibitionWishlistView } from '@components/ExhibitionWishlistView';
import { IExhibitionInfo } from '@../../types/index';

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
    <>
      <ExhibitionWishlistView exhibitionWishList={exhibitionList} />
    </>
  );
};

export default Home;
