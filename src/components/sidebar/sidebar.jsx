"use client"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef} from 'react';
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


const Sidebar = () => {
    const hideSidebar = useSelector(state=>!state.sideBar.value)
    const sideBarRef = useRef(null)
    const dispatch = useDispatch()


    // check a click outside of the elementREF to do the action
    useOutsideChecker(sideBarRef,() => dispatch(custom(true)), (hideSidebar && screen.width<1000), document.querySelector('#header') );

    useEffect(() => {
        //MEJORAR AQUI
        const sidebarWidth =  hideSidebar ? '4.37rem' : '250px'; // Aquí defines el valor dinámico
        screen.width>1000 && document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
    }, [hideSidebar]); // Ejecuta este efecto cada vez que `show` cambie

    return(
        <div className={`${styles.sidebar} ${(hideSidebar) && styles.sideBarHidden}`} ref={sideBarRef} >
            <div className={styles.logoSection}>
                <img src={ screen.width>1000 && hideSidebar ?'/images/logos/logoShort.png' :'/images/logos/logoLarge.png'} alt="" />
            </div>
            <div className={styles.items}>
                <SidebarItem title={'Dashboard'} active={true} isSidebarHidden={hideSidebar}>
                    <SidebarSubItem title={'General'}/>
                    <SidebarSubItem title={'Asistencias'}/>
                    <SidebarSubItem title={'Ventas'}/>
                </SidebarItem>
                <SidebarItem title={'Tablas'} icon={mdiTable} isSidebarHidden={hideSidebar}></SidebarItem>
                <SidebarItem title={'Graficos'} icon={mdiChartBar} isSidebarHidden={hideSidebar}></SidebarItem>
                <SidebarItem title={'Item1'} isSidebarHidden={hideSidebar}></SidebarItem>
                <SidebarItem title={'Item2'} isSidebarHidden={hideSidebar}></SidebarItem>
                <SidebarItem title={'Item3'} isSidebarHidden={hideSidebar}></SidebarItem>
                <SidebarItem title={'Item4'} isSidebarHidden={hideSidebar}></SidebarItem>
            </div>
            <div className={`${styles.actions}`}>
                <Action title={'Ajustes'} isSidebarHidden={hideSidebar}/>
                <Action icon={mdiLogout} title={'Cerrar sesión'} isSidebarHidden={hideSidebar}/>
            </div>
        </div>
    )
}

export default Sidebar