"use client"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import SidebarItem from './item/item'
import SidebarSubItem from './subitem/subitem';
import Action from './action/action';
import styles from './sidebar.module.css'

//ICONS
import { mdiTable } from '@mdi/js';
import { mdiChartBar } from '@mdi/js';
import { mdiLogout } from '@mdi/js';


const Sidebar = () => {
    const  show = useSelector(state=>state.sideBar.value)

    useEffect(() => {
        const sidebarWidth = show ? '250px' : '4.37rem'; // Aquí defines el valor dinámico
        document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
    }, [show]); // Ejecuta este efecto cada vez que `show` cambie

    return(
        <div className={`${styles.sidebar} ${!show && styles.sideBarHidden}`}>
            <div className={styles.logoSection}>
                <img src={show ?'/images/logos/logoLarge.png' :'/images/logos/logoShort.png'} alt="" />
            </div>
            <div className={styles.items}>
                <SidebarItem title={'Dashboard'} active={true} isSidebarHidden={!show}>
                    <SidebarSubItem title={'General'}/>
                    <SidebarSubItem title={'Asistencias'}/>
                    <SidebarSubItem title={'Ventas'}/>
                </SidebarItem>
                <SidebarItem title={'Tablas'} icon={mdiTable} isSidebarHidden={!show}></SidebarItem>
                <SidebarItem title={'Graficos'} icon={mdiChartBar} isSidebarHidden={!show}></SidebarItem>
                <SidebarItem title={'Item1'} isSidebarHidden={!show}></SidebarItem>
                <SidebarItem title={'Item2'} isSidebarHidden={!show}></SidebarItem>
                <SidebarItem title={'Item3'} isSidebarHidden={!show}></SidebarItem>
                <SidebarItem title={'Item4'} isSidebarHidden={!show}></SidebarItem>
            </div>
            <div className={`${styles.actions}`}>
                <Action title={'Ajustes'} isSidebarHidden={!show}/>
                <Action icon={mdiLogout} title={'Cerrar sesión'} isSidebarHidden={!show}/>
            </div>
        </div>
    )
}

export default Sidebar