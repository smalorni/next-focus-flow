//Create a nav bar
import Link from 'next/link';

//import css when completed

//do not use anchor tags

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link id='home' href="/">
                Home
            </Link>
            <Link id='login' href="/login">
                Login
            </Link>
            <Link id='register' href="/register">
                Register
            </Link>
        </nav>
    )
}