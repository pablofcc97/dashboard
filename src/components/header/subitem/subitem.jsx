"use client"

import { useRouter } from 'next/navigation';
import styles from './subitem.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiPencilOutline } from '@mdi/js';

const HeaderSubItem = ({iconUrl, icon=mdiPencilOutline, title, url='/'}) => {
    const router = useRouter()
    return(
        <div className={styles.subItem}>
            <span className={styles.icon}>
                {iconUrl 
                    ?<span className={styles.preIcon}>
                        <img src={iconUrl} alt="" />
                     </span>
                     :<Icon 
                            path={icon} 
                            size={'2.14rem'} 
                            color='#111'    
                        />
                
                }
            </span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default HeaderSubItem