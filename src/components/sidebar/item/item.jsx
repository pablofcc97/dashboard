"use client";

import { useRouter } from 'next/navigation';
import styles from './item.module.css';

//ICON
import Icon from '@mdi/react';
import { mdiCube } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

const SidebarItem = ({ children=[], url = '/', title, icon = mdiCube, isActive = false, isSidebarHidden, isOpen, setOpenItem }) => {
    const router = useRouter();
    const hasChilds = children.length > 0

    const handleRedirect = () => {
        if (hasChilds) {
            setOpenItem(isOpen ? null : title);
            return
        }
        router.push(url)
    };

    return (
        <div className={`${styles.itemContainer} ${isSidebarHidden && styles.itemHidden}`}>
            <div className={`${styles.item} ${isActive && styles.itemActive} before`} onClick={handleRedirect}>
                <div className={styles.itemContent}>
                    <span className={styles.icon}>
                        <Icon path={icon} size={'1.14rem'} color='#44ce42' />
                    </span>
                    <span className={styles.title}>{title}</span>
                </div>
                {hasChilds && (
                    <span
                        className={`${styles.chevronIcon} ${isOpen && styles.chevronIconOpen}`}
                        onClick={() => setOpenItem(isOpen ? null : title)}
                    >
                        <Icon path={mdiChevronDown} size={'1.28rem'} color='#eeeded' />
                    </span>
                )}
            </div>
            {(isOpen || (isSidebarHidden && screen.width > 1000)) && (
                <div className={`${styles.subitems}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
