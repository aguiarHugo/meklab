'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import useMediaQuery from "@/hooks/UseMediaQuery"
import { Menu, X } from "lucide-react"
import logo from '../public/logo.png'


const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return (
        <header className="fixed z-40 top-0 w-full bg-dark-300">
            <nav className="flex items-center justify-between h-[100px] px-12 pb-1 border-b border-dark-200">
                <Link
                    href='/'
                >
                    <Image
                        width={120}
                        height={120}
                        src={logo}
                        alt="logo"
                    />
                </Link>

                 {/* DESKTOP */}
        {isAboveSmallScreens ? (
        <>
          <div className="flex items-center flex-col">
            <div className="flex gap-16">
              <Link href="/" className="duration-300 hover:text-blue-100">Home</Link>
              <Link href="/pages/aboutus" className="duration-300 hover:text-blue-100">Quem Somos</Link>
              <Link href="/pages/servicesOffered" className="duration-300 hover:text-blue-100">Serviços</Link>
              <Link href="https://www.bomgia.com.br/bg/pages/meklab-contato/" className="duration-300 hover:text-blue-100" target="_blank">Contato</Link>          
            </div>
          </div>
            
          </>
          ) : (
          <>
            <button 
              className={"rounded-full bg-blue-100 p-2"}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {!isMenuToggled ? (
                <Menu size={24} className="text-dark-300" /> 
              ) : (
                <X size={24} className="text-dark-300" /> 
              )}
            </button>
          </>
        )}

        {/* MOBILE MODAL */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-3 top-[4.4rem] h-[300px] bg-blue-100 rounded-md px-4">
            <div className="flex flex-col mt-6 gap-6 text-center text-dark-300">
              <Link href="/">Home</Link>
              <hr className="border-blue-200" />
              <Link href="/pages/aboutus">Quem Somos</Link>
              <hr className="border-blue-200" />
              <Link href="/pages/servicesOffered">Serviços</Link>
              <hr className="border-blue-200" /> 
              <Link href="https://www.bomgia.com.br/bg/pages/meklab-contato/" target="_blank">Contato</Link>                   
            </div>
          </div>
        )}
            </nav>

        </header>
)
}

export default Navbar