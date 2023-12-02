

import Image from "next/image";

export default function Hero() {
  return (
    <section >
      <div className=''>
        <div className='container mx-auto px-4 pt-10'>
          <section className="text-gray-600 body-font">
            <div className="flex md:flex-row flex-col items-center justify-center h-auto md:h-[700px]">
              <div className="md:w-1/2 md:pr-16 flex items-center justify-center flex-col md:items-start md:text-left mb-16 md:mb-0 text-center h-full">
                <div className='flex items-center justify-center'>
                  <img className='' src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-2.png" alt="" />
                  <img className="object-cover object-center rounded"
                    alt="image" src='https://wpbingosite.com/wordpress/econis/wp-content/webp-express/webp-images/uploads/2021/06/img5-4.png.webp' />

                </div>
                <h1 className="title-font sm:text-6xl text-3xl mt-4  mb-8 md:mb-2 lg:mb-8 font-medium text-gray-600">
                  Savor Every Bite, Indulge Your <span className='text-orange-600'>Foody Moody</span> Delight!
                </h1>
                <p className=" mt-3 mb-8 md:mb-3 lg:mb-8 leading-relaxed text-xl md:text-sm lg:text-xl">
                  Welcome to Foody Moody, where flavor reigns supreme. Dive into a world of culinary bliss, where every dish is a masterpiece. Our chefs craft unforgettable experiences, blending fresh ingredients and creativity. Join us in savoring life's delicious moments – your journey into flavor starts here!
                </p>

                <div className=" flex gap-4 mt-4">
                  <button className="inline-flex text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600  rounded-full text-lg">Order Now!!!</button>
                  <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded-full text-lg">Learn More!!!</button>

                </div>
              </div>
              <div className="flex items-end md:w-1/2  lg:-mb-12  -mb-6">

                <img className="object-cover object-center rounded"
                  alt="image" src='https://testo-livid.vercel.app/images/about-02-img.png' />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}