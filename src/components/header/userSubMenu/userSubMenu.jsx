import UserSubitem from "./userSubitem/userSubitem"
import styles from './userSubMenu.module.css'

//ICONS
import Icon from '@mdi/react';
import { mdiEmailOpenOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiLock } from '@mdi/js';
import { mdiLogout } from '@mdi/js';

const UserSubMenu = () => {
    const userImg = '/images/users/face16.jpg'
    return(
        <div className={styles.userSubMenu}>
            <div className={styles.userImageContainer}>
                <img src={userImg} alt="" className={styles.userImage}/>
            </div>
            <div className={styles.userOptionsSection}>
                <div className={styles.userOptionsContainer}>
                    <span className={styles.optionTitle}>Opciones de usuario</span>
                    <UserSubitem title={'Inbox'} icon={mdiEmailOpenOutline} notifications={3} notificacionsColor='var(--accent-color)'/>
                    <UserSubitem title={'Perfil'} icon={mdiAccountOutline} notifications={1}/>
                    <UserSubitem title={'configuración'}/>
                </div>
                <div className={styles.userOptionsContainer}>
                    <span className={styles.optionTitle}>Acciones</span>
                    <UserSubitem title={'Bloquear cuenta'} icon={mdiLock} />
                    <UserSubitem title={'Cerrar Sesión'} icon={mdiLogout}/>
                </div>
            </div>
        </div>
    )
}

export default UserSubMenu