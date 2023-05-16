"use client"
import React, { useState, useEffect } from 'react'
import {
    RiMenu4Line,
    RiCloseLine,
} from 'react-icons/ri'

interface Props {}

const MobileMenu = () => {
    
    const [ show, setShow ] = useState('close')
    
    useEffect(() => {
        if (show === null) {
            setShow('close')
        }
    }, [show])

    const onMenuChange = () => {
        switch(show) {
            case 'open':
                setShow('close')
                break
            default:
                setShow('open')
                break
        }
    }

    return (
        <div className='flex sm:hidden w-full h-full items-center justify-end'>
            <div className='flex flex-center items-center relative h-[32px] w-[32px] transition-all duration-300 ease-in-out'>
                <label className='absolute cursor-pointer'>
                    <input
                        type="checkbox"
                        value={'close'}
                        checked={show === 'open'}
                        onChange={() => onMenuChange()}
                        id="0"
                        name="menu"
                        className='hidden peer/close'
                    />
                    <RiMenu4Line className='opacity-100 peer-checked/close:opacity-0 scale-100 peer-checked/close:scale-0 visible peer-checked/close:invisible transition-all duration-300 ease-in-out text-[20px]'/>
                </label>
                <label className='cursor-pointer'>
                    <input
                        type="checkbox"
                        value={'open'}
                        checked={show === 'close'}
                        onChange={() => onMenuChange()}
                        id="1"
                        name="menu"
                        className='hidden peer/open'
                    />
                    <RiCloseLine className='opacity-100 peer-checked/open:opacity-0 scale-100 peer-checked/open:scale-0 visible peer-checked/open:invisible transition-all duration-300 ease-in-out text-[20px]'/>
                </label>
            </div>
            { show === 'open' && (
                <div className='block absolute top-[64px] left-0 right-0 w-full bg-black'>
                    <ul>
                        Mobile
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MobileMenu