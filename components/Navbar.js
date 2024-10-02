import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { SelectButton } from '../components/Buttons';


export default function Navbar({ type }) {
    
    let nav_class = "top-0 backdrop-blur-3xl sticky z-[50]"
    if ( type == "/") {
        nav_class += " hidden";
    }
    
    useEffect(() => {
        if (type == "/") { DynamicNavBar(); }
    }, []);

    return (
        <nav id="navbar" className={nav_class}>
            <div className="container mx-auto flex items-center">
                <div className="px-5 py-3 flex items-center w-full">
                    <Link href="/" className="flex items-center">
                        <Image
                          src="/images/letter-m.png"
                          width={36}
                          height={36}
                          alt="M from Marco"
                        />
                    <h1 className="font-bold px-3">
                        Marco Ramos
                    </h1>
                    </Link>
                </div>
                <SelectButton type={`${type}`} />
            </div>
        </nav>
    )
}
