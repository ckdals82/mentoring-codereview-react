export type IExhibitionInfo = {
  id: number;
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  date: {
    started: string;
    ended: string;
  };
};
