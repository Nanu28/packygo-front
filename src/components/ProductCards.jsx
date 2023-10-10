import React, { useContext } from "react";
import { DataContext } from "../components/Context/DataContext.jsx";

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
  
    const buyProduct = (product) => {
      setCart([...cart, product]);
    };

    return (
        <section className="flex flex-col lg:flex-row gap-4 lg:p-10">
            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Article 1</h2>
                        <div className="flex justify-around">
                            <span>Price: $4.99</span>
                            <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">Buy</button>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Article 2</h2>
                        <div className="flex justify-around">
                            <span>Price: $5.99</span>
                            <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">Buy</button>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Article 3</h2>
                        <div className="flex justify-around">
                            <span>Price: $9.99</span>
                            <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">Buy</button>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Products;
