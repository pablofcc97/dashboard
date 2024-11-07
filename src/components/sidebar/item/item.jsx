"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import styles from './item.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiCube } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

const SidebarItem = ({children, url='/', title, icon=mdiCube, active=false, isSidebarHidden}) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const showSubItems = () => {
        setIsOpen(!isOpen)

    }

    const redirect = (url) => {
        if(children){
            showSubItems()
            return
        }
        console.log(`redirigiendo a ${url}`)
        router.push(url)
    }

    return(
        <div className={`${styles.itemContainer} ${isSidebarHidden && styles.itemHidden}`}>
            <div className={`${styles.item} ${active && styles.itemActive} before`} onClick={()=>redirect(url)}>
                <div className={styles.itemContent}>
                    <span className={styles.icon}>
                        <Icon 
                            path={icon} 
                            size={'1.14rem'} 
                            color='#44ce42'    
                        />
                    </span>
                    <span className={styles.title}>{title}</span>
                </div>
                {children && 
                    <span className={`${styles.chevronIcon} ${isOpen && styles.chevronIconOpen}`} onClick={()=>showSubItems()}>
                        <Icon 
                            path={mdiChevronDown} 
                            size={'1.28rem'} 
                            color='#eeeded'    
                        />
                    </span>
                }
            </div>
            {(isOpen || (isSidebarHidden && screen.width > 1000)) && 
                <div className={`${styles.subitems}`}>
                    {children}
                </div>
            }
            
        </div>
    )
}

export default SidebarItem