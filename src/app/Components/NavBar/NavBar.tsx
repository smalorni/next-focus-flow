//Create a nav bar
import Link from 'next/link';

//import css when completed

//need to fix this section 

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <Link href="/register">
                <a>Register</a>
            </Link>
        </nav>
    )
}