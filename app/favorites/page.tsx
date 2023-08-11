import EmptyPage from "../components/EmptyPage";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteList from "../actions/getFavoriteList";
import FavoriteClient from "./FavoriteClient";

const FavoritePage = async () => {
  const currentUser = await getCurrentUser();
  const favoriteList = await getFavoriteList();

  if (favoriteList.length === 0) {
    return (
      <ClientOnly>
        <EmptyPage
          title="No favorite found"
          subtitle="Looks like you have no favorite one"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient favoriteList={favoriteList} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
