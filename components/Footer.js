import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="container mx-auto my-6 text-center text-xs sm:text-sm">
            <div className="sm:flex sm:items-center sm:justify-between mx-10">
                <ul className="flex justify-center items-center my-3">
                    <li className="mx-4">
                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
                    </li>
                </ul>
                <span className="flex justify-center my-3 mx-4">
                    © 2024 marcoramos All Right Reserved
                </span>
            </div>
        </footer>
    )
}
