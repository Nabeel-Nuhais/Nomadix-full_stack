"use client";

import usePostSpaceModal from "@/hooks/usePostSpaceModal";
import useLoginModal from "@/hooks/useLoginModal";

interface PostSpaceButtonProps {
  userId?: string | null;
}

const PostSpaceButton: React.FC<PostSpaceButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();

  const postSpaceModal = usePostSpaceModal();
  const postYourSpace = () => {
    if (userId) {
      postSpaceModal.onOpen();
    } else {
      loginModal.onOpen();
    }
  };

  return (
    <>
      <div className="">
        <button
          onClick={postYourSpace}
          className="hidden md:block text-base bg-transparent font-semibold py-2 px-3 rounded-full hover:bg-[#25D1D1] hover:text-white transition cursor-pointer"
        >
          Post your space
        </button>
      </div>
    </>
  );
};

export default PostSpaceButton;
