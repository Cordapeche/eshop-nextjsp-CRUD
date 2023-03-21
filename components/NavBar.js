import Link from 'next/link'
import { getSession, useSession, signOut } from "next-auth/react"

const NavBar = () => {
    const handleSignOut = () => {
        signOut ();
    }
    const { data: session } = useSession()
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                { session ? <><a onClick={handleSignOut} >Sign Out</a><a href="/profile" >Profile</a></> : <Link href="/login">Log in</Link> }
            </nav>

        </>

    );
}

export default NavBar;