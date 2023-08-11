"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { ModifiedListing, ModifiedUser } from "../types/type";

interface FavoriteClientProps {
  favoriteList: ModifiedListing[];
  currentUser?: ModifiedUser | null;
}

const FavoriteClient = ({ favoriteList, currentUser }: FavoriteClientProps) => {
  return (
    <Container>
      <Heading title="Favorite" subtitle="List of your favorite places" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favoriteList.map((favorite) => (
          <ListingCard
            key={favorite.id}
            currentUser={currentUser}
            data={favorite}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
