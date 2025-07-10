"use client";

import Link from "next/link";
import Image from 'next/image';
import { FaBars, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { HeartIcon, Search } from "lucide-react";
import Form from "next/form";
import { Button } from "../ui/button";
import CartButton from "../product/cartBtn";
import { toast } from "sonner";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        if (searchQuery.length <= 2) {
            toast.success(`OOOppps:: ${searchQuery} :: Sökningen måste vara längre än 2 karaktärer`);
            return;
        }
        router.push(`/search?query=${searchQuery}`);
        setIsSearchOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="bg-gray-300">
            {/* Top Bar */}
            <div className="border-t-4 border-black"></div>
            <div className="border-t-4 border-white"></div>
            <div className="border-t-4 border-red-600"></div>
            <div className="border-t-4 border-white"></div>
            <div className="border-t-4 border-green-900"></div>

            <header className="relative flex bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-4 py-3 items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                    
                {/* Menu Icon */}
                <div onClick={() => setIsOpen(true)} className="md:flex xl:hidden lg:flex cursor-pointer text-blue-300 hover:bg-white">
                    <FaBars size={24} />
                </div>

                        <div className="flex items-center justify-center space-x-2">          
                            <Link href="/" className="flex items-center justify-center space-x-2">
                                         <Image 
                                           src="/icons/suma-shop.png" 
                                           alt="SUMA E-commerce logo" 
                                           width={40} 
                                           height={40}
                                           className="mb-2 ml-9 w-15 mt-0 rounded-full transition-transform duration-300 hover:scale-130"
                                         />
                                         <div className='mb-1 ml-1'>
                                         <span className="text-black font-extrabold">S</span>
                                         <span className="text-white font-bold">M</span>
                                         <span className="text-red-500 font-bold">_</span>
                                         <span className="text-red-500 font-bold">P</span>
                                         <span className="text-white font-bold">A</span>
                                         <span className="text-green-600 font-bold">L</span>
                                         <span className="text-red-500 font-bold">_</span>
                                         <span className="text-black font-bold">20</span>
                                         <span className="text-green-600 font-bold">25</span>
                                     </div>
                           </Link>
                        </div>    
                </div>

                {/* Middel Side Icons */}
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    {/* Search input for desktop */}
                    <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
                        <input className="border-2 border-yellow-300 hover:border-blue-500 text-blue-400 hover:text-yellow-200"
                            type='text'
                            placeholder='Search products'
                            value={searchQuery}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Search icon for desktop */}
                    <div>
                        <FaSearch className="text-2xl cursor-pointer text-yellow-300 hover:text-blue-300 hover:bg-white hidden md:block"
                            onClick={handleSearch} />
                    </div>

                    {/* Mobile Search Icon */}
                    <div>
                        <FaSearch className="text-2xl cursor-pointer text-blue-300 hover:bg-white md:hidden"
                            onClick={() => setIsSearchOpen(true)} />

                        {/* Search Popup (mobil) */}
                        {isSearchOpen && (
                            <div className="absolute top-full left-0 w-full bg-gray-300 flex justify-center z-50 p-4">
                                <div className="bg-blue-200 p-6 rounded-xl w-11/12 max-w-lg shadow-lg relative">
                                    <FaTimes
                                        className="absolute top-2 right-2 bg-red-700 hover:bg-green-400 rounded-full p-1 shadow-md text-xl cursor-pointer"
                                        onClick={() => setIsSearchOpen(false)}
                                    />

                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <input
                                            type="text"
                                            placeholder="Search for products"
                                            className="flex-grow p-3 outline-none text-black"
                                            value={searchQuery}
                                            onKeyDown={handleKeyDown}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button
                                            className="bg-blue-500 text-black p-3 hover:bg-blue-800 rounded-full"
                                            onClick={handleSearch}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:hidden lg:hidden xl:flex flex-1 justify-center">
                        <ul className="flex space-x-6  text-blue-300 text-2xl">
                            <li><Link href="/" className="hover:bg-white hidden">HOME</Link></li>
                            <li><Link href="/products" className="hover:bg-white">PRODUCTS</Link></li>
                            <li><Link href="/products/category" className="hover:bg-white">CATEGORIES</Link></li>
                            <li><Link href="/about" className="hover:bg-white">ABOUT</Link></li>
                            <li><Link href="/contact" className="hover:bg-white hidden">CONTACT</Link></li>
                            <li><Link href="/profile" className="hover:bg-white hidden">PROFILE</Link></li>
                            <li><Link href="/filter" className="hover:bg-white hidden">FILTER</Link></li>
                            <li><Link href="/cart" className="hover:bg-white hidden">CART</Link></li>
                            <li><Link href="/favorite" className="hover:bg-white hidden">FAVORITE</Link></li>
                        </ul>
                    </div>

                    {/* Slide Menu (mobil) */}
                    <div className={`absolute top-full left-0 w-64 bg-gray-300 text-black shadow-lg z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex flex-row md:flex-row items-center justify-between gap-2 p-2 border-b border-gray-400">
                            <FaTimes className="cursor-pointer" size={24} onClick={() => setIsOpen(false)} />
                        </div>
                        <ul className="flex flex-col p-4 space-y-4 ">
                            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><hr /></li>
                            <li><Link href="/products"onClick={() => setIsOpen(false)}>PRODUCTS</Link></li>
                            <li><hr /></li>
                            <li><Link href="/filter" onClick={() => setIsOpen(false)}>FILTER</Link></li>
                            <li><Link href="/cart" onClick={() => setIsOpen(false)}>CART</Link></li>
                            <li><Link href="/favorite" onClick={() => setIsOpen(false)}>FAVORITE</Link></li>
                            <li><hr /></li>
                            <li><Link href="/products/category" className="hover:bg-white">CATEGORIES</Link></li>
                            <li><hr /></li>
                            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                            <li><hr /></li>
                            <li><Link href="/profile" onClick={() => setIsOpen(false)}>PROFILE</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row md:flex-row items-center justify-between gap-2 p-2">
                {/* Favorite Icon */}
                <div className="relative">
                <Link href="/favorite">
                <Button variant="outline" className="mt-2 w-8 h-8 text-red-600 rounded-full bg-blue-300 hover:bg-white hover:w-9 cursor-pointer border-0"><HeartIcon/></Button>
                </Link>
                </div>
                {/* Cart Icon */}
                <div className="relative">
                <CartButton />
                </div>               
                {/* Login/User Icon */}
                <div className="relative">
                <button 
                      onClick={() => router.push('/private')}
                      className=" mt-3 text-2xl rounded-full text-blue-300 hover:bg-white hover:h-6 cursor-pointer border-0"
                      aria-label="Gå till privat sida"
                >
                 <FaUserCircle />
                </button>
                </div>
                </div>
        </header>

        <footer className="flex bg-[url('/images/tree2.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 ">
        <Link href={"/profile"}>
        <span className='text-yellow-300 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl hover:text-amber-50 hover:text-5xl text-2xl bold text-shadow-amber-800 cursor-pointer'>
          Min PROFILE
        </span>
        </Link>
        <Form action="/search " className='relative flex gap-5 items-center justify-between h-20 px-25'>
         
             <Search className="absolute right-135 top-10 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                 <input name="query" className='w-100 pl-10' type="search" placeholder="Search for product" required/>
               
                 <button type="submit" className="flex bg-[url('/icons/logo1.png')] cursor-pointer rounded-b-3xl text-red-500 bg-green-400 p-1 hover:text-amber-50 hover:bg-amber-600"><Search/></button>
         </Form>  
        </footer>
       </div> 
    );
}
