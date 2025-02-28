import { create } from "zustand";

export type SearchQuery = {
  country: string | undefined
  checkIn: Date | undefined
  checkOut: Date | undefined
  guests: Number;
  bathrooms: Number;
  bedrooms: Number;
  category: string;
};

interface SeachModalStore {
  isOpen: boolean;
  step: string
  onOpen: (step: string) => void;
  onClose: () => void;
  query: SearchQuery;
  setQuery: (querry: SearchQuery) => void;
}

const useSearchModal = create<SeachModalStore>((set) => ({
  isOpen: false,
  onOpen: (step) => set({ isOpen: true, step: step }),
  onClose: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  step: '',
  query: {
    country: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
    bedrooms: 0,
    bathrooms: 0,
    category: "",
  },
}));

export default useSearchModal;
