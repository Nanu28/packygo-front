
function ProductCards() {
    return (
        <section className="flex flex-col lg:flex-row gap-4 lg:p-10">
            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Title</h2>
                        <div className="flex justify-around">
                            <span>Price: $4.99</span>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Title</h2>
                        <div className="flex justify-around">
                            <span>Price: $4.99</span>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Title</h2>
                        <div className="flex justify-around">
                            <span>Price: $4.99</span>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCards;