import ToggleMenuButton from './toggleMenuButton/toggleMenuButton';
import HeaderItem from './item/item';
import HeaderSubItem from './subitem/subitem';
import UserSubMenu from './userSubMenu/userSubMenu';
import HeaderIcon from './icon/icon';
import styles from './header.module.css'

//ICONS
import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';
import { mdiFileExcelBox } from '@mdi/js';
import { mdiFileWordBox } from '@mdi/js';
import { mdiEyeOutline } from '@mdi/js';
import { mdiPencilOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';



const Header = () => {
    const userImg = '/images/users/face16.jpg'

    return(
        <div className={`${styles.header}`} id={'header'}>
            <div className={styles.actions}>
                <ToggleMenuButton/>
            </div>
            <div className={styles.menu}>
                <div className={`${styles.menuItemsContainer} ${styles.menuSection}`}>
                    <HeaderItem title={'Reportes'}>
                        <HeaderSubItem title={'PDF'} icon={mdiFilePdfBox}/>
                        <HeaderSubItem title={'Excel'} icon={mdiFileExcelBox}/>
                        <HeaderSubItem title={'Doc'} icon={mdiFileWordBox}/>
                    </HeaderItem>
                    <HeaderItem title={'Proyectos'}>
                        <HeaderSubItem title={'Ver proyectos'} icon={mdiEyeOutline}/>
                        <HeaderSubItem title={'Editar Proyectos'} icon={mdiPencilOutline}/>
                    </HeaderItem>
                    <HeaderItem title={'English'} iconUrl={'/images/flags/en-flag.jpg'}>
                        <HeaderSubItem title={'Español'} iconUrl={'/images/flags/es-flag.png'}/>
                    </HeaderItem>
                </div> 
                <div className={`${styles.profileOptionsContainer} ${styles.menuSection}`}>
                    <HeaderItem title={'Pablo Cuba'} iconUrl={userImg}>
                        <UserSubMenu/>
                    </HeaderItem>
                </div>   
                <div className={`${styles.notificationsContainer} ${styles.menuSection}`}>
                    <HeaderIcon hasNotifications={true}/>
                    <HeaderIcon hasNotifications={true} icon={mdiBellOutline} dotColor='#ff0000'/>
                </div>
            </div>
        </div>
    )
}
export default Header