"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  bookedDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  bookedDates,
}) => {
  return (
    <>
      <div className="">
        <DateRange
          className="w-fit border border-solid border-gray-400 rounded-xl mb-4"
          rangeColors={["#262626"]}
          onChange={onChange}
          ranges={[value]}
          date={new Date()}
          direction="vertical"
          showDateDisplay={false}
          disabledDates={bookedDates}
          minDate={new Date()}
        />
      </div>
    </>
  );
};

export default DatePicker;
