import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Store = {
  wishExhibitionList: number[];
  addWishtExhibitionList: (wishExhibitionId: number) => void;
  deleteWishExhibitionList: (wishExhibitionId: number) => void;
};

export const useExhibitionStore = create<Store>((set) => ({
  wishExhibitionList: [],
  addWishtExhibitionList: (wishExhibitionId) =>
    set((id) => ({ wishExhibitionList: [...id.wishExhibitionList, wishExhibitionId] })),
  deleteWishExhibitionList: (wishExhibitionId) =>
    set((id) => ({
      wishExhibitionList: id.wishExhibitionList.filter((id) => id !== wishExhibitionId),
    })),
}));
