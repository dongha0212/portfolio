import Link from 'next/link';

export default function Footer(){
    return (
        <>
            <footer className="body-font">

                <div className="">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl">To Contact</span>
                        </a>
                    </Link>

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">E-mail address : dongha0212@naver.com /
                        <a href="https://discord.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Discord 이동하#3253</a>
                    </p>
                    </div>
                </div>
                </footer>
        </>
    );
}
