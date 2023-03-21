import Link from "next/link";
import { getSession } from 'next-auth/react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default () => {
    return (
        <>
        <NavBar></NavBar>
        <section className="container mx-auto text-center">
                <h3 className="text-4xl font-bold">Profile Page</h3>

                <Link href={"/"}>Home Page</Link>
        </section>
        <Footer></Footer>
        </>
    )
}

export async function getServerSideProps({ req }){
    const session = await getSession({ req })

    if(!session){
        return {
            redirect : {
                destination : "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}