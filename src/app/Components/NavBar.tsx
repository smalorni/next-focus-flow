
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="flex-no-wrap relative flex w-full items-center m-auto bg-[#1a1c1e]
         lg:flex-wrap">
            <div className="flex w-full flex-wrap items-center justify-between px-20">
                    <Link href="/">
                        <Image
                            src="/assets/Focus-Flow-Logo.png"
                            alt="Focus Flow Logo"
                            width={130}
                            height={130}
                        />
                    </Link>
                   
                    <Link href="/photo-sessions" className='text-white hover:text-gray-400 mr-4'>
                            Photo Sessions
                    </Link>
                    
                   
                    <Link href="/flow-board" className=' text-white hover:text-gray-400'>
                            Flow Board
                    </Link>
               
                </div>
        </nav>
    );
}
