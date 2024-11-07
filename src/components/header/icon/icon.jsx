"use client"

import { useRouter } from 'next/navigation';
import Ico from '@/components/icon/icon';
import styles from './icon.module.css'

//ICON
import { mdiEmailOutline } from '@mdi/js';

const HeaderIcon = ({icon=mdiEmailOutline, dotColor='var(--first-color)', hasNotifications=false, url='/'}) => {
    const Router = useRouter()
    const redirect = () => {
        Router.push(url)
    }
    
    return(
        <div className={styles.icon} onClick={redirect}>
            <Ico icon={icon} size={'1.5rem'}/>
            {hasNotifications && <span className={styles.dot} style={{'backgroundColor': dotColor}}></span>}
        </div>
    )
}

export default HeaderIcon