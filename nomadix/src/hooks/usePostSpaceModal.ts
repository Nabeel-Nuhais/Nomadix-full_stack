import { create } from "zustand";

interface PostSpaceModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePostSpaceModal = create<PostSpaceModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePostSpaceModal;
