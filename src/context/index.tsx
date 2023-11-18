'use client';
import { createContext, useState } from 'react';

import { Item } from '@/types/item';

type ItemProps = {
  items: Item[];
  setItem: (item: Item[]) => void;
};

const ItemContext = createContext<ItemProps>(
  {} as ItemProps
);

const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItem] = useState<Item[]>([]);

  return(
    <ItemContext.Provider value={{items, setItem}}>
      {children}
    </ItemContext.Provider>
  )
};

export { ItemProvider, ItemContext };