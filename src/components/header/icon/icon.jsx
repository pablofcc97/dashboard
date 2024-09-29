"use client"

import { useRouter } from 'next/navigation';
import styles from './icon.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';

const HeaderIcon = ({icon=mdiEmailOutline, dotColor='var(--first-color)', hasNotifications=false, url='/'}) => {
    const Router = useRouter()
    const redirect = () => {
        Router.push(url)
    }
    
    return(
        <div className={styles.icon} onClick={redirect}>
            <Icon 
                path={icon} 
                size={'1.5rem'} 
                color='#000'  
            />
            {hasNotifications && <span className={styles.dot} style={{'backgroundColor': dotColor}}></span>}
        </div>
    )
}

export default HeaderIcon