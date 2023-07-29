import getListing from "./actions/getListing";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyPage from "./components/EmptyPage";

export default async function Home() {
  const listing = await getListing();
  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyPage showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          My future lisings
        </div>
      </Container>
    </ClientOnly>
  );
}
