//create root layout for the app

import NavBar from "./Components/NavBar/NavBar"

export default function Layout ({ children }) {
    return (
        <div>
            <>
                <NavBar />
            </>
            <main>{children}</main>
        </div>
    )
}

