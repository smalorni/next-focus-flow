//create root layout for the app which will include nav bar and the children
//import global css
import '../styles/global.css';
// import NavBar
import NavBar from "./Components/NavBar"

//metadata for SEO
export const metadata = {
    title: 'Focus Flow',
    description: 'Focus Flow is an organizational app that helps photographers to manage photo sessions and save online photos to flow board for inspiration.',
    keywords: 'photography','photographers':'photo sessions','flow board': 'management','productivity': 'organization'
}

//must define html and body tags since Next does not automatically do this
//this is the root layout for the entire app and children is used as props to pass in the content of page (components)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}