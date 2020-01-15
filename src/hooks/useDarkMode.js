import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react';

function useDarkMode(){
    const [value, setValue] = useLocalStorage();
    
    useEffect(() => {
        if (value === true){
            return document.body.classList.add('dark-mode');
        }
        else {
            return document.body.classList.remove("dark-mode");
        }
    }, [value])
    return [value, setValue];
}

export default useDarkMode;