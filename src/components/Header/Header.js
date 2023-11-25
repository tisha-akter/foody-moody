import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className='flex items-center justify-between'>
                <Link className='text-orange-600 font-semibold text-2xl' href="">FOODY MOODY</Link>
                <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                    <Link href={''}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>
                    <Link className='bg-orange-600 text-white px-6 py-2 rounded-full' href={''}>Login</Link>
                </nav>
            </header>
        </>
    );
}