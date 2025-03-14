"use client";

import Button from "../../general/Button";
import { useState, useEffect } from "react";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import DatePicker from "@/components/general/DatePicker";
import apiService from "@/services/apiService";
import useLoginModal from "@/hooks/useLoginModal";
import toast from "react-hot-toast";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export type Property = {
  id: string;
  price_per_night: number;
  guests: number;
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  const loginModal = useLoginModal();

  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [guests, setGuests] = useState<string>("1");
  const guestsRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );

  const performBooking = async () => {
    if (!userId) {
      loginModal.onOpen();
      return;
    }

    if (!dateRange.startDate || !dateRange.endDate) {
      toast.error("Please select a valid date range.");
      return;
    }

    const selectedDates = eachDayOfInterval({
      start: dateRange.startDate,
      end: dateRange.endDate,
    });

    const isAlreadyBooked = selectedDates.some((date) =>
      bookedDates.some(
        (bookedDate) =>
          format(bookedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      )
    );

    if (isAlreadyBooked) {
      toast.error(
        "Selected dates are already booked. Please choose another date."
      );
      return;
    }

    try {
      const formData = new FormData();
      formData.append("guests", guests);
      formData.append("start_date", format(dateRange.startDate, "yyyy-MM-dd"));
      formData.append("end_date", format(dateRange.endDate, "yyyy-MM-dd"));
      formData.append("number_of_nights", nights.toString());
      formData.append("total_price", totalPrice.toString());

      const response = await apiService.post(
        `/api/v1/properties/${property.id}/book/`,
        formData
      );

      if (response.success) {
        toast.success("Booking successful!");
        getReservations();
      } else {
        throw new Error(
          response.message || "Booking failed. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        (error as Error).message || "Something went wrong. Please try again."
      );
    }
  };

  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate,
      key: "selection",
    });
  };

  const getReservations = async () => {
    const reservations = await apiService.get(
      `/api/v1/properties/${property.id}/reservations/`
    );

    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date),
      });

      dates = [...dates, ...range];
    });

    setBookedDates(dates);
  };

  useEffect(() => {
    getReservations();

    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && property.price_per_night) {
        const _fee = ((dayCount * property.price_per_night) / 100) * 5;

        setFee(_fee);
        setTotalPrice(dayCount * property.price_per_night * _fee);
        setNights(dayCount);
      } else {
        const _fee = (property.price_per_night / 100) * 5;

        setFee(_fee);
        setTotalPrice(property.price_per_night + _fee);
        setNights(1);
      }
    }
  }, [dateRange]);

  return (
    <>
      <div className="p-6 col-span-2 rounded-xl border border-solid border-[#d5d5d5] shadow-md">
        <h2 className="mb-5 text-lg">Price per night ${property.price_per_night}</h2>
        <div className="w-[100%] datepicker">
          <DatePicker
            bookedDates={bookedDates}
            value={dateRange}
            onChange={(value) => _setDateRange(value.selection)}
          />
        </div>

        <div className="mb-6 p-3 border border-solid border-[#d5d5d5] rounded-xl">
          <label htmlFor="" className="block font-medium text-sm mb-2">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full -ml-1 text-sm"
          >
            {guestsRange.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <Button onClick={performBooking} label="Book" />
        </div>
        <div className="mt-4 mb-2 flex justify-between align-center">
          <p>
            ${property.price_per_night} x {nights} nights
          </p>
          <p>${property.price_per_night * nights}</p>
        </div>
        <div className="mb-4 flex justify-between align-center">
          <p>Nomadix fee</p>
          <p>${fee}</p>
        </div>
        <hr className="border border-solid border-[#d5d5d5]" />
        <div className="mt-4 flex justify-between align-center">
          <p className="font-bold">Total</p>
          <p className="font-bold">${totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default ReservationSidebar;
