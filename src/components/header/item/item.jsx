"use client"
import { useState, useRef } from 'react';
import useOutsideChecker from '@/hooks/useOutsideCheck'
import styles from './item.module.css'

//ICON
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

const HeaderItem = ({title, iconUrl, children}) => {
    const [isOpen, setIsOpen] = useState(false) 
    const subMenuRef = useRef(null)

    //check a click outside of the element to close submenu
    useOutsideChecker(subMenuRef, ()=>setIsOpen(false))

    return(
        <div className={styles.itemContainer} onClick={()=>setIsOpen(!isOpen)} ref={subMenuRef}>
            <div className={styles.item}>
                    {iconUrl && 
                        <span className={styles.preIcon}>
                            <img src={iconUrl} alt="" />
                        </span>
                    }
                    <span className={styles.title}>{title}</span>
                    <span className={styles.icon}>
                        <Icon 
                            path={mdiMenuDown} 
                            size={'1.42rem'} 
                            color='#aab2bd'    
                        />
                    </span>
            </div>
            {isOpen && 
                <div className={styles.submenu}>
                    {children}
                </div>
            }
        </div>
    )
}

export default HeaderItem