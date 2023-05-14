"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
    RiSunLine,
    RiMacbookLine,
    RiMoonLine,
} from 'react-icons/ri'

interface ThemeSelectorProps {}

const ThemeSelector = () => {

    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    const modeSwitcher = (mode: string) => {
        switch(mode) {
            case 'light':
                setTheme(mode)
                break;
            case 'dark':
                setTheme(mode)
                break;
            default:
                setTheme(mode)
                break;
        }
        console.log(theme)
    }

    return (
        <div className="flex relative flex-row items-center justify-center [&>input]:hidden py-[10px] px-[8px] gap-[5px] [&>label]:cursor-pointer [&>label]:p-auto [&>label]:w-full [&>label]:flex [&>label]:justify-center [&>label]:z-[2]">
            <input id="0" name="mode" type="radio" value={'light'} checked={theme === 'light'} onChange={(e) => modeSwitcher(e.currentTarget.value)} className="[&:checked~span]:translate-x-[-43px]"/>
            <label htmlFor="0"><RiSunLine/></label>
            <input id="1" name="mode" type="radio" value={'system'} checked={theme === 'system'} onChange={(e) => modeSwitcher(e.currentTarget.value)} className="[&:checked~span]:translate-x-[0]"/>
            <label htmlFor="1"><RiMacbookLine/></label>
            <input id="2" name="mode" type="radio" value={'dark'} checked={theme === 'dark'} onChange={(e) => modeSwitcher(e.currentTarget.value)} className="[&:checked~span]:translate-x-[43px]"/>
            <label htmlFor="2"><RiMoonLine/></label>
            <span className="flex absolute bg-foreground/10 h-[24px] w-[38px] z-[1] rounded-sm transition duration-300 ease-in-out"></span>
        </div>
    )
}

export default ThemeSelector