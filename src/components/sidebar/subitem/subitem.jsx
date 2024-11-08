"use client"

import { useRouter } from 'next/navigation'
import styles from './subitem.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const SidebarSubItem = ({url='/', title, isActive=false}) => {
    const router = useRouter()
    return(
        <div className={`${styles.subitem} ${isActive && styles.subitemActive}`} onClick={()=>router.push(url)}>
            <span className={styles.icon}>
                <Icon 
                    path={mdiArrowRight} 
                    size={'0.85rem'} 
                    color= {isActive ?'#44ce42' :'#a2a2a2'}    
                />
            </span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default SidebarSubItem