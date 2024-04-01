'use client'

import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(() => {setMounted(true)}, [])

  return (
    <div>
        {
            (mounted && currentTheme === 'dark' ?
                <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} />
            :
                <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')} />
            )
        }
    </div>
  )
}
