"use client";

import Image from "next/image";

import { ChangeEventHandler, useState } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import usePostSpaceModal from "@/hooks/usePostSpaceModal";
import LoginModal from "./LoginModal";
import Heading from "../general/Heading";
import Categories from "../includes/categories/Categories";
import Button from "../general/Button";
import Input from "@/components/general/Input";
import SelectCountry, { SelectCountryValue } from "../general/SelectCountry";
import apiService from "@/services/apiService";
import toast from "react-hot-toast";

const PostSpaceModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null);

  const postSpaceModal = usePostSpaceModal();
  const router = useRouter();

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  };

  // submit form

  const submitForm = async () => {
    console.log("Submitting form...");

    if (
      dataCategory &&
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage
    ) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price_per_night", dataPrice);
      formData.append("bedrooms", dataBedrooms);
      formData.append("bathrooms", dataBathrooms);
      formData.append("guests", dataGuests);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("image", dataImage);

      try {
        const response = await apiService.post(
          "/api/properties/create/",
          formData
        );
        console.log("API Response:", response);

        const isSuccess = response.success || response.Success; // Normalize check
        if (isSuccess) {
          toast.success("Property posted successfully!");
          postSpaceModal.onClose();
          router.push("/?added=true");
        } else {
          toast.error("Failed to post property. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred while submitting the form.");
        console.error("Error:", error);
      }
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  const bodyContent = (
    <>
      {currentStep === 1 && (
        <>
          <Heading title="Choose category" />
          <Categories dataCategory={dataCategory} setCategory={setCategory} />
        </>
      )}
      {currentStep === 2 && (
        <>
          <Heading title="Describe your place" />
          <div className="pt-3 space-y-4">
            <Input
              id="title"
              label="Title"
              type="text"
              value={dataTitle}
              onChange={(e) => setDataTitle(e.target.value)}
            />
            <div className="flex flex-col space-y-2">
              <label className="text-zinc-400">Description</label>
              <textarea
                id="description"
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full p-4 pt-6 font-light bg-white rounded-md border-2 border-solid opacity-20 outline-none transition hover:opacity-100 focus:opacity-100"
              ></textarea>
            </div>
          </div>
        </>
      )}
      {currentStep === 3 && (
        <>
          <Heading title="Details & Pricing" />
          <div className="pt-3 space-y-4">
            <Input
              id="price_per_night"
              label="Price per Night"
              type="number"
              value={dataPrice}
              onChange={(e) => setDataPrice(e.target.value)}
            />
            <Input
              id="bedrooms"
              label="Bedrooms"
              type="number"
              value={dataBedrooms}
              onChange={(e) => setDataBedrooms(e.target.value)}
            />
            <Input
              id="bathrooms"
              label="Bathrooms"
              type="number"
              value={dataBathrooms}
              onChange={(e) => setDataBathrooms(e.target.value)}
            />
            <Input
              id="guests"
              label="Maximum Guests"
              type="number"
              value={dataGuests}
              onChange={(e) => setDataGuests(e.target.value)}
            />
          </div>
        </>
      )}
      {currentStep === 4 && (
        <>
          <Heading title="Set Location" />
          <div className="pt-3 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
        </>
      )}
      {currentStep === 5 && (
        <>
          <Heading title="Upload Image and Submit" />
          <div className="flex flex-col space-y-2">
            <div className="pt-3 space-y-4">
              <label className="text-zinc-400">Property Image</label>
              <div className="w-full p-4 pt-6 font-light bg-white rounded-md border-2 border-solid outline-none transition">
                <input
                  id="property_image"
                  type="file"
                  accept="image/*"
                  onChange={setImage}
                />
              </div>

              {dataImage && (
                <div className="w-[200px] h-[150px] relative">
                  <Image
                    fill
                    alt="uploaded Image"
                    src={URL.createObjectURL(dataImage)}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={postSpaceModal.isOpen}
        onClose={postSpaceModal.onClose}
        title="Add your property"
        body={bodyContent}
        actionLabel={currentStep < 5 ? "Next" : "Submit"}
        onSubmit={() => {
          if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
          } else {
            submitForm();

            postSpaceModal.onClose;
          }
        }}
        footer={
          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button
                onClick={() => setCurrentStep(currentStep - 1)}
                label="Previous"
                outline
              ></Button>
            )}
          </div>
        }
      />
    </>
  );
};

export default PostSpaceModal;
