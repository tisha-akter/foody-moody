import Image from "next/image";
import MenuItem from "../menuItem/MenuItem";

export default function HomeMenu() {
  return (
    <section className="container mx-auto px-4 pt-10">
      <div className=" text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5">
        <h1 className="mb-4 mt-28 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">
          Check Our <span className="text-orange-600">Menu</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20 w-full">
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </div>
    </section>
  );
}
