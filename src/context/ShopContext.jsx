import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

// Context provider function
const ShopContextProvider = (props) =>{
  const currency = '$';
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const navigate = useNavigate();

  // true -> show search bar , false -> hide search bar
  const [showSearch,setShowSearch] = useState(false); 

  const [cartItem,setCartItem] = useState({});

  const addToCart = async  (itemId,size) => {
    if(!size)
    {
      toast.error("Please select the product size")
      return;
    }
    let cartData= structuredClone(cartItem);
    if(cartData[itemId])
    {
      if(cartData[itemId][size]){
        cartData[itemId][size]+=1;
      }
      else{
        cartData[itemId][size]=1;
      }
    }
    else{
      cartData[itemId]={};
      cartData[itemId][size]=1;
    }
    setCartItem(cartData);
  }

 const getCartCount = () =>{
  let totalCount=0;
  for(const items in cartItem)
  {
    for(const item in cartItem[items])
    {
      try{
        if(cartItem[items][item]>0)
        {
          totalCount+=cartItem[items][item]
        }
      }
      catch(error)
      {

      }
    }
  }
  return totalCount;
 }

//  function which will update item quantity
const updateQuantity = async (itemId,size,quantity) =>{
  let cartData = structuredClone(cartItem);
  cartData[itemId][size] = quantity;
  setCartItem(cartData);

}

// to display totoal amount
const getCartAmount = () =>{
  let totalAmout =0;
  for(const items in cartItem)
  {
    let itemInfo = products.find((product)=> product._id === items);
    for(const item in cartItem[items])
    {
      try{
        if(cartItem[items][item] > 0){
          totalAmout+=itemInfo.price * cartItem[items][item];
        }

      }catch(error){

      }
    }
  }
  return totalAmout;
}
  const value={
    products,currency,delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItem,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;