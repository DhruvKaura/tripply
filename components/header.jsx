"use client";

import { useStoreUser } from '@/hooks/use-store-user';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import {BarLoader} from 'react-spinners';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {

   const {isLoading} = useStoreUser();
   const path = usePathname();
  return (
    <header className='fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60
    '>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-2'>
          <Image
            src="/logos/logo.png"
            width={200}
            height={60}
            alt="Logo"
            className='h-11 w-auto object-contain'
          />
        </Link>

        {path === "/" && (
          <div className='hidden md:flex items-center gap-6'>
            <Link 
              href="#features"
              className='text-sm font-medium hover:text-purple-700 transition'
            >
              Features
            </Link>
                        <Link 
              href="#how-it-works"
              className='text-sm font-medium hover:text-purple-700 transition'
            >
              How It Works
            </Link>
          </div>
        )}
      </nav>
      {isLoading && <BarLoader width={"100%"} color='#A51BE1'
      />}
    </header>
  )
}

export default Header
