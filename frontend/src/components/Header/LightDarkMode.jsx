import { MdDarkMode, MdLightMode } from 'react-icons/md';


export function LightDarkModeButton ({ isDarkMode,handleDarkMode }) {
    
    if(isDarkMode){
        return (
            <button className="link" onClick={ handleDarkMode }>
                <MdLightMode/> <span className="intense-black">Claro</span>
            </button>
        );        
    }
    return (
            <button className="link" onClick={ handleDarkMode }>
                <MdDarkMode/> <span className="intense-black">Oscuro</span>
            </button>
    );
}