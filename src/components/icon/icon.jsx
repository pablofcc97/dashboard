//ICON
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { useTheme } from '@/context/themeContext';

const Ico = ({icon=mdiEmailOutline, size, color}) => {
    const { theme } = useTheme();
    
    return(
            <Icon 
                path={icon} 
                size={size} 
                color= {color || theme == 'light' ?'#000' : '#fff' }
            />
    )
}

export default Ico