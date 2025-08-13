"use client";

import { createContext, useContext, useState } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  qnt: number;
};

type TCartContext = {
  cartItems: CartItem[];
  handleIncreaseProductQnt: (id: number) => void;
  getProductQnt: (id: number) => number;
  cartTotalQnt :number;
  handleDecreaseProductQnt : (id : number) => void;
  handleRemoveProduct : (id: number) => void
  handleAddtoCart : (id : number) => void;
};

const CartContext = createContext({} as TCartContext);


export const useCartContext = ()=>{
  return useContext(CartContext)
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getProductQnt = (id: number) => {
    return cartItems.find(item => item.id === id)?.qnt || 0;
  };

  const cartTotalQnt = cartItems.reduce((totalqnt , item)=>{
    return totalqnt + item.qnt
  }, 0)

  const handleIncreaseProductQnt = (id: number) => {
    setCartItems(currentItems => {
      let isNotproductExists = currentItems.find(item => item.id == id) == null;

      if (isNotproductExists) {
        return [...currentItems, { id :id, qnt: 1 }];
      } else {
        return currentItems.map(item =>
        {
          if(item.id == id){
            return{
              ...item,
              qnt : item.qnt + 1,
            }
          }
          else{
            return item;
          }
        }
        );
      }
    });
  };

  const handleDecreaseProductQnt = (id: number)=>{
    setCartItems((currentItems)=>{
      let IsLastOne = currentItems.find(item => item.id === id)?. qnt == 1

      if(IsLastOne){
        return currentItems.filter((item)=> item.id != id);
      } else {
        return currentItems.map((item) =>
          item.id === id
            ? { ...item, qnt: item.qnt - 1 }
            : item
        );
      }

    })
  }

  const handleRemoveProduct = (id : number)=>{
    setCartItems ((currentItems)=>{
      return currentItems.filter((item)=>item.id != id);
    })
  }

  const handleAddtoCart = (id : number) =>{
    setCartItems ((currentItems)=>{

      let IsExist = currentItems.find(item => item.id == id )
      if(!IsExist){
        return [...currentItems , {id , qnt:1}]
      }else{
        return currentItems;
      }
    })
  }

  return (
    <CartContext.Provider
      value={{ cartItems, handleIncreaseProductQnt, getProductQnt , cartTotalQnt , handleDecreaseProductQnt , handleRemoveProduct , handleAddtoCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
