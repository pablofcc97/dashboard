"use client"

import { useRouter } from 'next/navigation';
import Ico from '@/components/icon/icon';
import styles from './subitem.module.css'

//ICON
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
                     :<Ico icon={icon} size={'2.14rem'}/>
                
                }
            </span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default HeaderSubItem