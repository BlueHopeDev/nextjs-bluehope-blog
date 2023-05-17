import { getServerSession } from 'next-auth'
import {
    RiHomeLine,
    RiApps2Line,
    RiArrowRightSLine,
    RiInformationLine,
    RiUser4Line,
} from 'react-icons/ri'
import Link from 'next/link'
import ThemeSelector from './ThemeSelector'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import Brand from './Brand'

interface NavbarProps {}

const Navbar = async ({}) => {
  
    const session = await getServerSession()
  
    return (
        <header className='flex flex-row justify-center fixed top-0 h-[64px] w-full z-[5001] transition-all duration-300 ease-in-out'>
            <nav className='flex flex-row h-[100] px-[20px] w-full max-w-screen-lg'>
                <div className='flex items-center h-[100] min-w-[64px] w-[64px]'>
                    <Brand/>
                </div>
                <div className='block h-full w-max p-[16px]'>
                    <SearchBar/>
                </div>
                <div className='hidden sm:flex justify-end w-full'>
                    <ul className='flex flex-row h-full gap-[20px]'>
                        <li className='flex items-center h-full'>
                            <Link href={"/"}>
                                <div className='flex flex-col gap-[2px] opacity-60 hover:opacity-100 group transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiHomeLine/>
                                        <span>Home</span>
                                    </div>
                                    <span className='h-[2px] w-0 bg-dark dark:bg-light group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </Link>
                        </li>
                        <li className='flex relative items-center justify-center h-full group'>
                            <div className='cursor-pointer'>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-100 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiApps2Line/>
                                        <span>Category</span>
                                        <RiArrowRightSLine className='group-hover:rotate-90 transition duration-300 ease-in-out'/>
                                    </div>
                                    <span className='h-[2px] w-0 bg-dark dark:bg-light group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </div>
                            <div className="block absolute w-[160px] top-full opacity-0 group-hover:opacity-100 [&>ul]:-translate-y-5 group-hover:[&>ul]:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-in-out z-[1]">
                                <ul className="flex flex-col m-[10px] bg-glassLight/60 dark:bg-glassDark/60 backdrop-blur-sm rounded-sm [&>li:hover]:bg-dark/10 dark:[&>li:hover]:bg-light/10 [&>li]:px-[20px] [&>li]:py-[6px] [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm [&>li]:text-center transition-all duration-300 ease-in-out">
                                    <li className="p-[5px] text-dark dark:text-light cursor-pointer transition duration-300 ease-in-out">Technology</li>
                                    <li className="p-[5px] text-dark dark:text-light cursor-pointer transition duration-300 ease-in-out">Marketing</li>
                                </ul>
                            </div>
                        </li>
                        <li className='flex items-center h-full'>
                            <Link href={"/"}>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-100 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiInformationLine/>
                                        <span>About</span>
                                    </div>
                                    <span className='h-[2px] w-0 bg-dark dark:bg-light group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </Link>
                        </li>
                        <li className='flex relative items-center justify-end h-full group'>
                            <div className='cursor-pointer'>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-100 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiUser4Line/>
                                        <span>User</span>
                                        <RiArrowRightSLine className='group-hover:rotate-90 transition duration-300 ease-in-out'/>
                                    </div>
                                    <span className='h-[2px] w-0 bg-dark dark:bg-light group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </div>
                            <div className="block absolute w-[160px] right-[-10px] top-full opacity-0 group-hover:opacity-100 [&>ul]:-translate-y-5 group-hover:[&>ul]:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-in-out z-[1]">
                                <ul className="flex flex-col m-[10px] bg-glassLight/60 dark:bg-glassDark/60 backdrop-blur-sm rounded-sm [&>li:hover]:bg-dark/10 dark:[&>li:hover]:bg-light/10 [&>li]:pr-[20px] [&>li]:py-[6px] [&>li]:text-right [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm transition-all duration-300 ease-in-out">
                                    <li className="p-[5px] text-dark dark:text-light cursor-pointer transition duration-300 ease-in-out">Log in</li>
                                    <li className="p-[5px] text-dark dark:text-light cursor-pointer transition duration-300 ease-in-out">Register</li>
                                    <ThemeSelector/>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <MobileMenu/>
            </nav>
        </header>
    )
}

export default Navbar