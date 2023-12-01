export default function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://testo-livid.vercel.app/images/hero-4-img.png" alt="burger" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://testo-livid.vercel.app/images/hero-4-img.png" alt="burger"  className="w-1/2 absolute right-5  top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='mb-4 mt-28 text-4xl tracking-tight font-extrabold font-serif text-orange-600 dark:text-white'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio maiores sint nulla quasi dolores, vel at hic? Libero, dolore accusamus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla facilis quibusdam a ab necessitatibus optio sit quasi consequatur quidem?
                    </p>
                    <button className="text-white bg-orange-600 border-0 py-2 px-16 focus:outline-none hover:bg-gray-600  rounded-full text-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
}