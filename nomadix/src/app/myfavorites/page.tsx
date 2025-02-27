import PropertyList from "@/components/includes/properties/PropertyList";
import { getUserId } from "@/lib/actions";
import Container from "@/components/general/Container";

const MyFavoritesPage = async () => {
  const userId = await getUserId();

  if (!userId) {
    return (
      <>
        <Container>
          <div className="">You need to be authenticated</div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <div className="mt-10">
          <h1 className="mb-4 text-2xl font-semibold">My favorites</h1>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <PropertyList favorites={true} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyFavoritesPage;
