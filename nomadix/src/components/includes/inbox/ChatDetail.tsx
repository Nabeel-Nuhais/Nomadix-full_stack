import Button from "@/components/general/Button";

const ChatDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-lg text-gray-500">John Doe</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            illum! Dolor esse deleniti quam architecto aliquid ratione facere
            doloremque numquam, corporis facilis at eaque delectus sequi.
            Inventore quis rem quidem.
          </p>
        </div>

        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-lg text-gray-500">Neymar</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            illum! Dolor esse deleniti quam architecto aliquid ratione facere
            doloremque numquam, corporis facilis at eaque delectus sequi.
            Inventore quis rem quidem.
          </p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-solid border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message.."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />
        <div className="">
          <Button onClick={() => {}} label="Send" />
        </div>
      </div>
    </>
  );
};

export default ChatDetail;
