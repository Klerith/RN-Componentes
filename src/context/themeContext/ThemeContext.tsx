import React, { createContext, useReducer } from 'react';
import { ThemeState, themeReducer, lightTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState; 
    setDarkTheme: () => void;
    setLightTheme: () => void;
}



export const ThemeContext = createContext({} as ThemeContextProps );


export const ThemeProvider = ({ children }: any ) => {

    const [ theme, dispatch ] = useReducer( themeReducer, lightTheme );  // TODO: Leer el tema global..

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLightTheme');
    }


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}