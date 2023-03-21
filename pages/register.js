import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from "formik";
import { registerValidate } from '../lib/validate';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

export default function Register() {

    const router = useRouter();

    const [show, setShow] = useState({ password: false, cpassword: false })
    const [error, setError] = useState();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        // setError("okok");

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.status == false) {
                    setError(data.message);
                }
                else {
                    router.push('http://localhost:3000')
                }
            })
    }

    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <NavBar></NavBar>

            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className="title">
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
                    <p className='text-red-500'>{error}</p>

                </div>

                {/* form */}
                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className="">
                        <input
                            type="text"
                            name='Username'
                            placeholder='Username'
                            className=""
                            {...formik.getFieldProps('username')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    {formik.errors.username && formik.touched.username ? <span className='text-red-500'>{formik.errors.username}</span> : <></>}
                    <div className="">
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            className=""
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {formik.errors.email && formik.touched.email ? <span className='text-red-500'>{formik.errors.email}</span> : <></>}
                    <div className="">
                        <input
                            type={`${show.password ? "text" : "password"}`}
                            name='password'
                            placeholder='password'
                            className=""
                            {...formik.getFieldProps('password')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {formik.errors.password && formik.touched.password ? <span className='text-red-500'>{formik.errors.password}</span> : <></>}

                    <div className="">
                        <input
                            type={`${show.cpassword ? "text" : "password"}`}
                            name='cpassword'
                            placeholder='Confirm Password'
                            className=""
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-red-500'>{formik.errors.cpassword}</span> : <></>}

                    {/* login buttons */}
                    <div className="input-button">
                        <button type='submit' className="">
                            Register
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className='text-center text-gray-400 '>
                    Have an account? <Link href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
                </p>
            </section>
        </Layout>
    )
}