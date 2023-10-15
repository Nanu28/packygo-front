import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const TotalItems = () => {
  const { cart } = useContext(DataContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <p className='text-2xl font-semibold bg-amber-500'>{itemsQuanty}</p>;
};

export default TotalItems;