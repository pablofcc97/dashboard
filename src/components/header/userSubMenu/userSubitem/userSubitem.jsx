"use client"

import { useRouter } from 'next/navigation';
import Ico from '@/components/icon/icon';
import styles from './userSubitem.module.css'
//ICONS
import { mdiCog } from '@mdi/js';

const UserSubitem = ({title, icon=mdiCog, notifications=0, notificacionsColor='var(--first-color)'}, url='/') => {
    const Router = useRouter()

    const redirect = () => {
        Router.push(url)
    }
    return(
        <div className={styles.userSubitem} onClick={redirect}>
            <span className={styles.title}>{title}</span>
            <div className={styles.iconsContainer}>
                {notifications>0 && <span className={styles.notification} style={{'backgroundColor': notificacionsColor}}>{notifications}</span>}
                <span className={styles.icon}>
                    <Ico icon={icon} size={'1.05rem'}/>
                </span>
            </div>
        </div>
    )
}

export default UserSubitem