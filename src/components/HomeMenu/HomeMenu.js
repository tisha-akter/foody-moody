import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="container ">
            <div className="mx-auto px-4 pt-10">
                <div className="absolute h-full left-0 right-0 w-full justify-start">
                    <div className="absolute left-0 -top-[100px] text-left -z-10">
                        <Image
                            alt="image" src='https://testo-livid.vercel.app/assests/images/img-01.png' width='207' height='296' />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
}