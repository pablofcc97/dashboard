"use client"

import { useRouter } from 'next/navigation';
import styles from './action.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiCog } from '@mdi/js';

const Action = ({icon=mdiCog, title, isSidebarHidden }) => {
    const router = useRouter()
    return(
        <div className={`${styles.action} ${isSidebarHidden && styles.actionHidden}`}>
            <span className={styles.icon}>
                <Icon 
                    path={icon} 
                    size={'1.28rem'} 
                    color= {'#8e94a9'}    
                />
            </span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default Action