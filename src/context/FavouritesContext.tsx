import { createContext, useContext, useState, ReactNode } from 'react';

interface FavouritesContextType {
  favourites: string[];
  addToFavourites: (productId: string) => void;
  removeFromFavourites: (productId: string) => void;
  isFavourite: (productId: string) => boolean;
  toggleFavourite: (productId: string) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>([]);

  const addToFavourites = (productId: string) => {
    setFavourites(prev => [...prev, productId]);
  };

  const removeFromFavourites = (productId: string) => {
    setFavourites(prev => prev.filter(id => id !== productId));
  };

  const isFavourite = (productId: string) => {
    return favourites.includes(productId);
  };

  const toggleFavourite = (productId: string) => {
    if (isFavourite(productId)) {
      removeFromFavourites(productId);
    } else {
      addToFavourites(productId);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within FavouritesProvider');
  }
  return context;
}

