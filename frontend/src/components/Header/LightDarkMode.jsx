import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';


export default function LightDarkModeButton ({ isDarkMode,handleDarkMode }) {
    
    if(isDarkMode){
        return (
            <button className="link" onClick={ handleDarkMode }>
                <Brightness7Icon/> <span className="intense-black">Claro</span>
            </button>
        );        
    }
    return (
            <button className="link" onClick={ handleDarkMode }>
                <Brightness4Icon/> <span className="intense-black">Oscuro</span>
            </button>
    );
}