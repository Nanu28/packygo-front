import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const TotalItems = () => {
  const { cart } = useContext(DataContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <span className='font-semibold bg-amber-500 text-white rounded-full  py-1 px-2'>{itemsQuanty}</span>;
};

export default TotalItems;