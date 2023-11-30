export default function MenuItem(){
    return(
        <div>
              <div className="card w-full md:w-96 bg-gray-200 hover:bg-orange-200">
                    <figure className="px-10 pt-10">
                        <img src="https://testo-livid.vercel.app/images/hero-4-img.png" alt="burger" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-3">Burger</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h5><span className="font-bold  text-gray-700">Price : </span>50$</h5>
                        <div className="my-3 text-center items-center">
                            <button className="mt-10  text-white bg-orange-600 border-0 py-2 px-16 focus:outline-none hover:bg-gray-600  rounded-full text-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}