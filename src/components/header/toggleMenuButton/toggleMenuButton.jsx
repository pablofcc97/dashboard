"use client"


import { useDispatch } from 'react-redux';
import { toggle } from '@/store/slice/sidebarSlice';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

import styles from './toggleMenuButton.module.css'

const ToggleMenuButton = () => {
    const dispatch = useDispatch()
    return(
        <span className={styles.toggleIcon} onClick={() => dispatch(toggle())}>
            <Icon
                path={mdiMenu} 
                size={'1rem'} 
                color='#8e94a9'
            />
        </span>
    )
}

export default ToggleMenuButton