"use client";

import Image from "next/image";
import FooterNav from "./footer-bar/footer-nav";
import FooterSocialLinks from "./footer-bar/footer-social-links";
import FooterKontaktInfo from "./footer-bar/footer-kontakt-info";
import FooterAdressInfo from "./footer-bar/footer-adress-info";

export default function GlobalFooter() {
  return (
    <>
    <footer className="flex border-0 bg-[url('/images/sky4.jpg')] bg-center bg-no-repeat bg-cover shadow-md items-center justify-between text-white py-8 border-t-2">
    <div className="container border-0 mx-auto px-4">
      <header className="flex mb-6">
        {/* Logotyp + Företagsnamn */}
        <a  href="/private">
          <Image 
            src="/icons/suma-shop.png" 
            alt="SUMA E-commerce logo" 
            width={60} 
            height={60}
            className="mb-2 ml-9 w-14 mt-0 rounded-full transition-transform duration-300 hover:scale-110"
          />
        </a>
          <h3 className="text-3xl p-2 font-bold text-blue-300 mt-1 ml-2"> <div className='mb-1 ml-1'>
          <span className="text-red-600 font-bold">S</span>
          <span className="text-white">M</span>
          <span className="text-black">_</span>
          <span className="text-green-600">P</span>
          <span className="text-white font-bold">A</span>
          <span className="text-white">L</span>
          <span className="text-black">_</span>
          <span className="text-red-500">20</span>
          <span className="text-green-900">25</span>
      </div> </h3>
      </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Navigationslänkar */}
          <FooterNav />

          
          {/* Sociala medier */}
          <FooterSocialLinks />         

          {/* Kontaktinformation */}
          <FooterKontaktInfo />

          {/* Adressinformation */}
          <FooterAdressInfo />  
        </div>

        {/* Copyright-text */}
        <p className="text-center mt-6 text-sm opacity-80">
        &copy;  2024 - {new Date().getFullYear()} |  SU_PAL E-commerce <strong className="underline">@SUMA AB.</strong> All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
