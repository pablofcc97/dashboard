"use client"

import { useRouter } from 'next/navigation'
import styles from './subitem.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const SidebarSubItem = ({url='/', title, active=false}) => {
    const router = useRouter()
    return(
        <div className={`${styles.subitem} ${active && styles.subitemActive}`} onClick={()=>router.push(url)}>
            <span className={styles.icon}>
                <Icon 
                    path={mdiArrowRight} 
                    size={'0.85rem'} 
                    color= {active ?'#44ce42' :'#a2a2a2'}    
                />
            </span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default SidebarSubItem