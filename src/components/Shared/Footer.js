import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className=''>
            <div className="footer p-10 bg-slate-600 text-white ">
                <div className=''>
                    <h2 className="text-2xl font-bold font-serif text-orange-600">
                        Foody Moody
                    </h2>
                    <p>Foody Moody <br />Providing healthy and authentic food since 2003</p>
                </div>
                <div>
                    <span className="footer-title">COMPANY</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Menu</a>
                    
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <Link href={''}><span className='font-semibold'>Address:</span> Road # 137, Block # SE(F), <br /> Gulshan-2, Dhaka-1212.</Link>
                    <Link href={''}><span className='font-semibold'>Phone: </span> 012893749</Link>
                    <Link href={''}><span className='font-semibold'>Email:</span> foodymoody03@gmail.com</Link>
                </div>

                <div>
                    <span className="footer-title">Follow us</span>

                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className='h-5 w-5 text-white'></FaFacebook>
                        <FaInstagram className='h-5 w-5 text-white'></FaInstagram>
                        <FaTwitter className='h-5 w-5 text-white'></FaTwitter>
                    </div>
                </div>

            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2024 - All right reserved by Foody Moody</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;