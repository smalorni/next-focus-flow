//Create a nav bar that will show logo being the home link, a link to the flow board, and a link to the photoshoots. The nav bar will be on every page of the app.

//import Link for the links to work
import Link from 'next/link';
//import Image for the logo to appear
import Image from 'next/image';

//import css when completed

//do not use anchor tags

export default function NavBar() {
    return (
        
        <nav className='flex-between w-full pt-3 text-white'>
            <Link id='home' href="/">
                <Image src='/assets/Focus-Flow-Logo.png' 
                alt='Focus Flow Logo' 
                width={100} 
                height={100} /> 
            </Link>

            <Link id='photo-sessions' href="/photo-sessions">
                Photo Sessions
            </Link>

            <Link id='flow-board' href="/flow-board">
                Flow Board
            </Link>
        </nav>
    )
}