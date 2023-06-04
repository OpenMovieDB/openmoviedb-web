import { create } from "zustand";

type Store = {
  selectedItem: any;
  setSelectedItem: (selectedItem: any) => void;
};

export const useStore = create<Store>((set) => ({
  selectedItem: "",
  setSelectedItem: (selectedItem) => set({ selectedItem }),
}));
