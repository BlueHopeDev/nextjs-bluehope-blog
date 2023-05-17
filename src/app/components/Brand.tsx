"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import bluehopeWideTextLight from '@/public/bluehope-wide-text-light.svg'
import bluehopeWideTextDark from '@/public/bluehope-wide-text-dark.svg'

interface Props {}

const Brand = () => {

    const { theme, systemTheme } = useTheme()

    return (
        <>
        { theme === 'system' && systemTheme === 'dark' ||
          theme === 'dark' ? (
            <Image
                src={bluehopeWideTextDark}
                alt='BLUEHOPE'
                style={{
                    objectFit: 'contain'
                }}
            />
        ) : (
            <Image
                src={bluehopeWideTextLight}
                alt='BLUEHOPE'
                style={{
                    objectFit: 'contain'
                }}
            />
        )}
        </>
    )
}

export default Brand