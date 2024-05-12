import { Button, Dropdown } from 'antd';
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'
import favicon from '../Asset/logos/auntyjayz2.jpg';
import { Link } from 'react-router-dom';
// import { color } from 'framer-motion';

const items =
    [
        {
            key: '1',
            label: (<Link to="/health" className="uppercase hover:rounded-lg hover:p-1">Health Benefit</Link>)
        },
        {
            key: '2',
            label: (<Link to="/wealth" className="uppercase hover:rounded-lg hover:p-1 ">Wealth Benefit</Link>)
        }
    ];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


          
return (
    <div>
        <div className=" flex h-16 bg-green-900 align-center justify-between pt-8 pr-12 pl-12" >
                <div className="flex space-x-1 item-center justify-center">
                    <div className="flex item-center justify-center pl-5 cursor-pointer">
                        <a href="/jinsigmure_mj@gmail.com _blank" className="flex gap-2" >
                            <FaEnvelope style={{ color: 'white' }} />
                            <p className="text-sm text-yellow-400 relative bottom-1 right-1">jigsimurmj@gmail.com</p>
                        </a>
                    </div>
                    <div className="flex space-x-3 item-center justify-center pl-3">
                        <FaPhoneAlt style={{ color: 'white' }} />
                        <p className="text-sm text-yellow-400 relative bottom-1 right-2.5">+2347044639165</p>
                    </div>
                </div>
                <div className="flex space-x-2 item-center justify-center pr-12">
                    <a href="https://facebook.com" className="cursor-pointer target_blank" style={{ color: 'white' }}><FaFacebook /></a>
                    <a href="https://whatsapp.com" className="cursor-pointer target_blank" style={{ color: 'white' }}><FaWhatsapp /></a>
                    <a href="https://instagram.com" className="cursor-pointer target_blank" style={{ color: 'white' }}><FaInstagram /></a>
                    <a href="https://twitter.com" className="cursor-pointer target_blank" style={{ color: 'white' }}><FaTwitter /></a>

                </div>

        </div>

        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="pl-16">
                        <div className="align-center">
                            <div>
                                <a href="/">
                                    <img
                                        src={favicon}
                                        alt="main logo"
                                        className="mix-blend-lighter h-40"
                                    />
                                </a>
                            </div>
                            <div>
                                <h2 className="text-xl pl-7 tracking-wide font-segeo UI uppercase font-bold">jigsimur</h2>
                            </div>
                        </div>
                    </div>
                <ul className="flex space-x-6 hover">
                    <li>
                        <Link to="/">
                            <Button type="text" className="track-wide">
                                HOME
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Button type="text" className="track-wide">
                                ABOUT JIGSINMUR
                            </Button>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Dropdown
                            menu={{ items }}
                            placement="bottom"
                            arrow={{ pointAtCenter: true }}
                        >
                            <Button type="text" className="tracking-wide">
                                BENEFIT
                            </Button>
                        </Dropdown>
                    </li>
                    <li>
                        <Link to="/shop">
                            <Button type="text" className="tracking-wide" >
                                SHOP NOW
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <Button type="text" className="track-wide">
                                CONTACT
                            </Button>
                        </Link>
                    </li>
                </ul>

                <div className="bg-black px-16 py-3 hover:shadow-xl relative right-10 rounded-tr-lg rounded-bl-lg text-yellow-400">
                    <Link to="/register">
                        REGISTER
                    </Link>
                </div>

                <div className="sm:hidden">
                        <button onClick={toggleMenu} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="text-white">
                                <a href="/">About</a>
                                <a href="/">Shop</a>
                                <a href="/">Wealth</a>
                                <a href="/">Health</a>
                                <a href="/">Contact</a>
                            </div>
                        )}
                    </div>
            </div>
        </nav>
    </div>
// </div>

);
};


export default Navbar;
