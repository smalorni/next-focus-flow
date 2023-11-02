"use client";

import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function NavBar() {
    //set state for hamburger menu
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className='bg-[#1a1c1e]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                    {/* Hamburger menu button */}
                        <Hamburger direction='right' color='white' toggled={openMenu} toggle={setOpenMenu} />
                    </div>
                    
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex flex-shrink-0 items-center'>
                        <Link href="/">
                        <Image
                            src="/assets/Focus-Flow-Logo.png"
                            alt="Focus Flow Logo"
                            width={130}
                            height={130}
                        />
                        </Link>
                        </div>
                    </div>
                       {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
                       {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
                        <div className={`sm:flex space-x-4 ${openMenu ? 'block' : 'hidden'}`}>
                            <Link href="/photo-sessions" className='text-white hover:underline underline-offset-8 decoration-blue-400 decoration-{3px} decoration-solid mr-6'>
                                Photo Sessions
                            </Link>
                    
                            <Link href="/flow-board" className='text-white hover:underline underline-offset-8 decoration-blue-400 decoration-{3px} decoration-solid'>
                                Flow Board
                            </Link>
                        </div>
                    </div>
                </div> 
        </nav>
    );
}
