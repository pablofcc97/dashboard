"use client"


//THEME COLOR CHANGE
import Ico from '@/components/icon/icon';
import { mdiThemeLightDark } from '@mdi/js';
import { useTheme } from '@/context/themeContext';

import styles from './themeButton.module.css'

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();


    return(
        <span className={`${styles.themeButton}`} onClick={toggleTheme}>
            <Ico icon={mdiThemeLightDark} size={'1.5rem'}/>
        </span>
    )
}

export default ThemeButton