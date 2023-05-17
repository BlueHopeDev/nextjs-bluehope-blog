'use client'
import React, { useState, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import SearchModal from '../modals/SearchModal'
import detectOS from '@/src/app/lib/detectOS'

interface Props {}

const SearchBar = () => {

    const [ show, setShow ] = useState<boolean>(false)
    const [ OS, setOS ] = useState<string | undefined>()
    const [ shortcut, setShortcut ] = useState<string>("Search")
    const [isCtrlKPressed, setIsCtrlKPressed] = useState<boolean>(false)

    useEffect(() => {
        const userAgent = window.navigator.userAgent
        const detectedOS = detectOS(userAgent)
        setOS(detectedOS)
        onGetOS(detectedOS)

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                setShow(true)
            } else if (event.metaKey && event.key === 'k') {
                setShow(true)
            }
        };
      
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'k') {
                setIsCtrlKPressed(false)
            }
        };
      
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
      
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        };

    }, []);
    
    const onGetOS = (OS: string | undefined) => {
        switch(OS) {
            case 'Mac OS':
                setShortcut("Cmd + K")
                break
            case 'Windows':
                setShortcut("Ctrl + K")
                break
            default:
                setShortcut("Search")
                break
        }
    }

    return (
        <>
        <div onClick={() => setShow(!show)} className='flex items-center h-full w-max bg-white/10 rounded-full gap-[10px] p-[10px] border-[1px] border-foreground/10 hover:border-foreground/20 select-none cursor-pointer drop-shadow-sm transition duration-300 ease-in-out'>
            <RiSearch2Line className='text-dark dark:text-light'/>
            <span className='text-dark dark:text-light'>{OS === undefined ? "Search" : shortcut}</span>
        </div>
        <SearchModal isOpen={show} onClose={() => setShow(false)}/>
        </>
    )
}

export default SearchBar