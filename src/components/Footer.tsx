import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
           
            <div className='md:flex justify-between md:px-10 px-7 text-center '>
                <p className=' font-bold'>All Rights Reserved © | <br className='md:hidden' /><Link href='https://github.com/shoaibattari' target='_blank' > Shoaib Memon </Link></p>
                <div>
                    <Link href={'/'}>Legals </Link>|
                    <Link href={'/'}> Terms Of Use </Link>|
                    <Link href={'/'}> Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}