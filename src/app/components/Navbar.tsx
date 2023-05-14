import Image from 'next/image'
import { getServerSession } from 'next-auth'
import bluehopeWideText from '../../../public/bluehope-wide-text.svg'
import {
    RiSearch2Line,
    RiHomeLine,
    RiApps2Line,
    RiArrowRightSLine,
    RiInformationLine,
    RiUser4Line,
} from 'react-icons/ri'
import Link from 'next/link'
import ThemeSelector from './ThemeSelector'

interface NavbarProps {}

const Navbar = async ({}) => {
  
    const session = await getServerSession()
  
    return (
        <header className='flex flex-row justify-center fixed top-0 h-[64px] w-full bg-header/20 dark:bg-header/10 backdrop-blur-sm z-[9999]'>
            <nav className='flex flex-row h-[100] w-full max-w-screen-lg'>
                <div className='flex items-center h-[100] w-[64px]'>
                    <Image
                        src={bluehopeWideText}
                        alt='BLUEHOPE'
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div className='block h-full w-max p-[16px]'>
                    <div className='flex items-center h-full w-max bg-white/10 rounded-full gap-[10px] p-[10px] border-[1px] border-foreground/10 hover:border-foreground/20 select-none cursor-pointer drop-shadow-sm transition duration-300 ease-in-out'>
                        <RiSearch2Line/>
                        <span className='text-foreground dark:text-foreground'>Cmd + K</span>
                    </div>
                </div>
                <div className='flex justify-end w-full'>
                    <ul className='flex flex-row h-full gap-[20px]'>
                        <li className='flex items-center h-full'>
                            <Link href={"/"}>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-80 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiHomeLine/>
                                        <span>Home</span>
                                    </div>
                                    <span className='h-[2px] w-0 bg-foreground group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </Link>
                        </li>
                        <li className='flex relative items-center justify-center h-full group'>
                            <div className='cursor-pointer'>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-80 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiApps2Line/>
                                        <span>Category</span>
                                        <RiArrowRightSLine className='group-hover:rotate-90 transition duration-300 ease-in-out'/>
                                    </div>
                                    <span className='h-[2px] w-0 bg-foreground group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </div>
                            <div className="block absolute w-[160px] top-full opacity-0 group-hover:opacity-100 [&>ul]:-translate-y-5 group-hover:[&>ul]:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-in-out z-[1]">
                                <ul className="flex flex-col m-[10px] bg-white/20 backdrop-blur-sm rounded-sm [&>li:hover]:bg-foreground/10 [&>li]:px-[20px] [&>li]:py-[4px] [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm [&>li]:text-center transition-all duration-300 ease-in-out">
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Technology</li>
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Marketing</li>
                                </ul>
                            </div>
                        </li>
                        <li className='flex items-center h-full'>
                            <Link href={"/"}>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-80 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiInformationLine/>
                                        <span>About</span>
                                    </div>
                                    <span className='h-[2px] w-0 bg-foreground group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </Link>
                        </li>
                        <li className='flex relative items-center justify-end h-full group'>
                            <div className='cursor-pointer'>
                                <div className='flex flex-col gap-[2px] group opacity-60 hover:opacity-80 transition duration-300 ease-in-out'>
                                    <div className='flex flex-row items-center gap-[8px]'>
                                        <RiUser4Line/>
                                        <span>User</span>
                                        <RiArrowRightSLine className='group-hover:rotate-90 transition duration-300 ease-in-out'/>
                                    </div>
                                    <span className='h-[2px] w-0 bg-foreground group-hover:w-full transition-width duration-300 ease-in-out'></span>
                                </div>
                            </div>
                            <div className="block absolute w-[160px] right-[-10px] top-full opacity-0 group-hover:opacity-100 [&>ul]:-translate-y-5 group-hover:[&>ul]:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-in-out z-[1]">
                                <ul className="flex flex-col m-[10px] bg-white/20 backdrop-blur-sm rounded-sm [&>li:hover]:bg-foreground/10 [&>li]:pr-[20px] [&>li]:py-[4px] [&>li]:text-right [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm transition-all duration-300 ease-in-out">
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Log in</li>
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Register</li>
                                    <ThemeSelector/>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar