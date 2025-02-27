import Button from "@/components/general/Button";
import Container from "@/components/general/Container";
import Image from "next/image";
import apiService from "@/services/apiService";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MyReservationPage = async () => {
  const reservations = await apiService.get("/api/auth/myreservations/");

  return (
    <Container>
      <div className="mt-10">
        <h1 className="mb-4 text-2xl font-semibold">My Reservations</h1>

        {reservations.length === 0 ? (
          <p className="text-gray-500">You have no reservations yet.</p>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation: any) => (
              <div
                key={reservation.id}
                className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-solid border-[#f2f2f2] rounded-xl"
              >
                <div className="col-span-1">
                  <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                      src={reservation.property.image_url}
                      fill
                      className="hover:scale-110 object-cover transition h-full w-full"
                      alt={reservation.property.title}
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                  <h2 className="mb-4 text-xl font-medium">
                    {reservation.property.title}
                  </h2>

                  <p className="mb-2">
                    <strong>Check-in date:</strong> {reservation.start_date}
                  </p>
                  <p className="mb-2">
                    <strong>Check-out date:</strong> {reservation.end_date}
                  </p>
                  <p className="mb-2">
                    <strong>Number of nights:</strong>{" "}
                    {reservation.number_of_nights}
                  </p>
                  <p className="mb-2">
                    <strong>Total price:</strong> ${reservation.total_price}
                  </p>
                  <Link
                    href={`/properties/${reservation.property.id}`}
                    className="inline-block mt-2"
                  >
                    <div
                      className="
                        px-4
                        py-2
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        rounded-lg
                        hover:bg-[#1BB5B5]
                        transition
                        w-full bg-[#25D1D1]
                        text-white
                      "
                    >
                      Go to property
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyReservationPage;
