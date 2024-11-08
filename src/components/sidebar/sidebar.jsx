"use client"
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState, useMemo} from 'react';
import { custom } from '@/store/slice/sidebarSlice';
import useOutsideChecker from '@/hooks/useOutsideCheck'

import SidebarItem from './item/item'
import SidebarSubItem from './subitem/subitem';
import Action from './action/action';
import styles from './sidebar.module.css'

//ICONS
import { mdiTable } from '@mdi/js';
import { mdiChartBar } from '@mdi/js';
import { mdiLogout } from '@mdi/js';

const sidebarConfig = [
    {
      title: 'Dashboard',
      url: '/',
      subItems: [],
    },
    {
      title: 'Tablas',
      icon: mdiTable,
      subItems: [
        { title: 'General', url: '/tables' },
        { title: 'Asistencias', url: '/tables/assists' },
        { title: 'Ventas', url: '/tables/ventas' },
      ],
    },
    {
      title: 'Graficos',
      icon: mdiChartBar,
      subItems: [
        { title: 'General', url: '/charts' },
        { title: 'Asistencias', url: '/charts/asistencias' },
        { title: 'Ventas', url: '/charts/ventas' },
      ],
    },
    {
        title: 'item1',
        url: '/item1',
        subItems: [],
    },
    {
        title: 'item2',
        url: '/item2',
        subItems: [],
    },
    {
        title: 'item3',
        url: '/item3',
        subItems: [],
    },
    {
        title: 'item4',
        url: '/item4',
        subItems: [],
    },

  ];


const Sidebar = () => {
    const pathname = usePathname()
    const hideSidebar = useSelector(state=>!state.sideBar.value)
    const sideBarRef = useRef(null)
    const dispatch = useDispatch()
    const router = useRouter()

    const sidebarWidth = useMemo(() => (hideSidebar ? '4.37rem' : '250px'), [hideSidebar]);

    // state for the actual open item
    const [openItem, setOpenItem] = useState(null);

    const redirect = (url) => {
        router.push(url);
    };

    // check a click outside of the Sidebar to close it on tablet and mobile devices
    useOutsideChecker(
        sideBarRef,
        () => dispatch(custom(true)), 
        (hideSidebar && screen.width<1000), 
        document.querySelector('#header') 
    );

    useEffect(() => {
        //MEJORAR AQUI
        document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
    }, [hideSidebar]); 

    useEffect(() => {
        const activeItem = sidebarConfig.find(item => 
            pathname === item.url || item.subItems.some(subItem => pathname === subItem.url)
        );
        setOpenItem(activeItem?.title || null); // Actualiza `openItem` según la ruta activa
    }, [pathname]);

    return(
        <div className={`${styles.sidebar} ${(hideSidebar) && styles.sideBarHidden}`} ref={sideBarRef} >
            <div className={styles.logoSection} onClick={()=>redirect('/')}>
                <img src={ screen.width>1000 && hideSidebar ?'/images/logos/logoShort.png' :'/images/logos/logoLarge.png'} alt="" />
            </div>
            <div className={styles.items}>
                {sidebarConfig.map((item) => (
                    <SidebarItem
                        key={item.title}
                        title={item.title}
                        url={item.url}
                        icon={item.icon}
                        isSidebarHidden={hideSidebar}
                        isActive={pathname === item.url || pathname.startsWith(item.subItems[0]?.url)}
                        isOpen={openItem === item.title} 
                        setOpenItem={setOpenItem}
                    >
                        {item.subItems.map((subItem) => (
                        <SidebarSubItem
                            key={subItem.title}
                            title={subItem.title}
                            url={subItem.url}
                            isActive={pathname === subItem.url}
                        />
                        ))}
                    </SidebarItem>
                ))}
            </div>
            <div className={`${styles.actions}`}>
                <Action title={'Ajustes'} isSidebarHidden={hideSidebar}/>
                <Action icon={mdiLogout} title={'Cerrar sesión'} isSidebarHidden={hideSidebar}/>
            </div>
        </div>
    )
}

export default Sidebar