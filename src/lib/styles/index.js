import React from 'react'
import { ThemeContext } from "styled-components";
import { ResetStyles } from "./resetStyles";
import { RootVariables } from "./rootVariables";
import { Light, Dark, Palette } from './theme';

const LightTheme = { ...Light, ...Palette };
const DarkTheme = { ...Dark, ...Palette };

const ThemeProvider = ({ theme, children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <ResetStyles />
            <RootVariables />
            {children}
        </ThemeContext.Provider>
    );
}

export { LightTheme, DarkTheme, ThemeProvider };