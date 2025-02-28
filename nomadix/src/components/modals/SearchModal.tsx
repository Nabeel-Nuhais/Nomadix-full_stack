"use client";

import Modal from "./Modal";
import useSearchModal, { SearchQuery } from "@/hooks/useSearchModal";
import Heading from "../general/Heading";
import SelectCountry, { SelectCountryValue } from "../general/SelectCountry";
import { useState } from "react";
import { Range } from "react-date-range";
import DatePicker from "../general/DatePicker";
import Button from "../general/Button";
import Input from "@/components/general/Input";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchModal = () => {
  let bodyContent = <></>;
  const searchModal = useSearchModal();
  const [country, setCountry] = useState<SelectCountryValue>();
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [numGuests, setNumGuests] = useState<string>("1");
  const [numBedrooms, setNumBedrooms] = useState<string>("0");
  const [numBathrooms, setNumBathrooms] = useState<string>("0");

  const closeAndSearch = () => {
    const newSearchQuery: SearchQuery = {
      country: country?.label,
      checkIn: dateRange.startDate,
      checkOut: dateRange.endDate,
      guests: parseInt(numGuests),
      bedrooms: parseInt(numBedrooms),
      bathrooms: parseInt(numBathrooms),
      category: "",
    };

    searchModal.setQuery(newSearchQuery);
    searchModal.onClose();
  };

  const _setDateRange = (selection: Range) => {
    if (searchModal.step === "checkin") {
      searchModal.onOpen("checkout");
    } else if (searchModal.step === "checkout") {
      searchModal.onOpen("details");
    }

    setDateRange(selection);
  };

  const contentLocation = (
    <>
      <Heading title="Where do you want to go?" />
      <div className="pt-3">
        <SelectCountry
          value={country}
          onChange={(value) => setCountry(value as SelectCountryValue)}
        />
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <Heading title="When do you want to check in?" />
      <div className="pt-3">
        <DatePicker
          value={dateRange}
          onChange={(value) => _setDateRange(value.selection)}
        />
      </div>
    </>
  );

  const contentCheckout = (
    <>
      <Heading title="When do you want to check out?" />
      <div className="pt-3">
        <DatePicker
          value={dateRange}
          onChange={(value) => _setDateRange(value.selection)}
        />
      </div>
    </>
  );

  const contentDetails = (
    <>
      <Heading title="Details" />
      <div className="pt-3 space-y-4">
        <Input
          id="number_of_guests"
          label="Number of guests"
          type="number"
          min-value="1"
          value={numGuests}
          onChange={(e) => setNumGuests(e.target.value)}
        />
        <Input
          id="number_of_bedrooms"
          label="Number of bedrooms"
          type="number"
          min-value="1"
          value={numBedrooms}
          onChange={(e) => setNumBedrooms(e.target.value)}
        />
        <Input
          id="number_of_bathrooms"
          label="Number of bathrooms"
          type="number"
          min-value="1"
          value={numBathrooms}
          onChange={(e) => setNumBathrooms(e.target.value)}
        />
      </div>
    </>
  );

  if (searchModal.step === "location") {
    bodyContent = contentLocation;
  } else if (searchModal.step === "checkin") {
    bodyContent = contentCheckin;
  } else if (searchModal.step === "checkout") {
    bodyContent = contentCheckout;
  } else if (searchModal.step === "details") {
    bodyContent = contentDetails;
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Search"
      actionLabel={
        searchModal.step === "location"
          ? "Check-in date >"
          : searchModal.step === "checkin"
          ? "Check-out date >"
          : searchModal.step === "checkout"
          ? "Details >"
          : "Search"
      }
      onClose={searchModal.onClose}
      onSubmit={() =>
        searchModal.step === "location"
          ? searchModal.onOpen("checkin")
          : searchModal.step === "checkin"
          ? searchModal.onOpen("checkout")
          : searchModal.step === "checkout"
          ? searchModal.onOpen("details")
          : closeAndSearch()
      }
      body={bodyContent}
      footer={
        <div className="flex justify-between">
          {searchModal.step === "checkin" && (
            <Button
              outline
              label="< Location"
              onClick={() => searchModal.onOpen("location")}
            />
          )}
          {searchModal.step === "checkout" && (
            <Button
              outline
              label="< Check-in date"
              onClick={() => searchModal.onOpen("checkin")}
            />
          )}
          {searchModal.step === "details" && (
            <Button
              outline
              label="< Check-out date"
              onClick={() => searchModal.onOpen("checkout")}
            />
          )}
        </div>
      }
    />
  );
};

export default SearchModal;
