import styled from 'styled-components';
import { Button, Col, Flex, Typography } from 'antd';
import { IExhibitionInfo } from '@../../types/index';
import { ReactComponent as EmptyStar } from '../../assets/icons/EmptyStar.svg';
export const ExhibitionWishlistView = (props: { exhibitionWishList: IExhibitionInfo[] }) => {
  const { exhibitionWishList } = props;
  const articleList = exhibitionWishList.map((list: IExhibitionInfo) => (
    <ListContainer>
      <ImageBox src={list.imageUrl} alt="Image" />
      <ExhibitionInfo>
        <Flex justify="space-between">
          <Typography>{list.title}</Typography>
          <div>
            <EmptyStar />
          </div>
        </Flex>
        {/* <Col span={24}></Col> */}
        <Col span={24}>{list.place}</Col>
        <Col span={24}>{list.price}</Col>
        <Col span={24}>
          <Flex justify="space-between">
            <div>
              {list.date.started}~{list.date.ended}
            </div>

            <div style={{}}>
              <Button
                style={{
                  width: '40px',
                  height: '16px',
                  borderRadius: '4px',
                  fontSize: '8px',
                  textAlign: 'center',
                  padding: '0px',
                }}
              >
                예매하기
              </Button>
            </div>
          </Flex>
        </Col>
      </ExhibitionInfo>
    </ListContainer>
  ));

  return <>{articleList}</>;
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
