"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/general/Container";
import Button from "@/components/general/Button";
import PropertyList from "@/components/includes/properties/PropertyList";
import apiService from "@/services/apiService";
import { getUserId } from "@/lib/actions";

const LandlordPage = () => {
  const [landlord, setLandlord] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const landlordId = params?.id as string;

  useEffect(() => {
    if (!landlordId) return;

    const fetchLandlord = async () => {
      try {
        const data = await apiService.get(`/api/auth/${landlordId}`);
        setLandlord(data);
      } catch (error) {
        console.error("Failed to load landlord:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserId = async () => {
      const id = await getUserId();
      setUserId(id);
    };

    fetchLandlord();
    fetchUserId();
  }, [landlordId]);

  if (loading) return <p>Loading...</p>;
  if (!landlord) return <p>Landlord not found</p>;

  return (
    <Container>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 mb-4">
            <div className="flex flex-col items-center p-6 rounded-xl border border-solid border-[#d5d5d5] shadow-md">
              <div className="w-[50px]">
                <Image
                  src={landlord.avatar_url}
                  alt={landlord.name || "Host"}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h1 className="mt-6 text-base font-medium">
                {landlord.name || "Host name"}
              </h1>

              {userId !== landlordId && userId !== null && (
                <div className="w-full mt-3">
                  <Button onClick={() => {}} label="Contact" />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <PropertyList landlord_id={landlordId} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandlordPage;
