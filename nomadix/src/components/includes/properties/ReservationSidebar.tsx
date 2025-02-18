"use client";

import Button from "../../general/Button";

const ReservationSidebar = () => {
  return (
    <>
      <div className="p-6 col-span-2 rounded-xl border border-solid border-[#d5d5d5] shadow-md">
        <h2 className="mb-5 text-lg">$200 per night</h2>

        <div className="mb-6 p-3 border border-solid border-[#d5d5d5] rounded-xl">
          <label htmlFor="" className="block font-medium text-sm mb-2">
            Guests
          </label>
          <select className="w-full -ml-1 text-sm">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <div className="">
          <Button onClick={() => {}} label="Book" />
        </div>
        <div className="mt-4 mb-2 flex justify-between align-center">
          <p>$200 x 4 nights</p>
          <p>$800</p>
        </div>
        <div className="mb-4 flex justify-between align-center">
          <p>Nomadix fee</p>
          <p>$40</p>
        </div>
        <hr className="border border-solid border-[#d5d5d5]" />
        <div className="mt-4 flex justify-between align-center">
          <p className="font-bold">Total</p>
          <p className="font-bold">$840</p>
        </div>
      </div>
    </>
  );
};

export default ReservationSidebar;
