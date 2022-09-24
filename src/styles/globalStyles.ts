import { createGlobalStyle } from "styled-components";

function pixelToRem(...values: number[]){
    return values
    .reduce((acc, current) => (acc += current / 16 +`rem `), "")
    .trim();
}
export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        @media(max-width: 1440px){
           
        }
        @media(max-width: 375px){
           
        }
    }
    body{
        -webkit-font-smoothing: antialiased;
        font-family: "Heebo", sans-serif;
    }
    
    :root {
        /*Colors*/
        --space-ligth: #3C68B2;
        --space-dark: #040327;
        --space: #0B1E8A;
        --gray-01: #0D0E13;
        --gray-02: #2C2D3A;
        --gray-03: #60616F;
        --gray-04: #898A93;
        --gray-05: #D5D5DB;
        --mars: #E85937;
        --mars-light: #FF8C70;
        --mars-dark: #CF3F1D;
        --sun: #F5D15F;
        --uranus: #24FFE9;
        --jupiter: #E00E34;
        --earth: #0FDD86;
        --saturn: #554AD7;
        --text: #FFF;

        /*Fonts*/
        --font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Heebo", sans-serif;
        --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} "Heebo", sans-serif;
        --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} "Heebo", sans-serif;
        --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} "Heebo", sans-serif;
        

        --text-00: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif;
        --text-01: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif;
        --text-02: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;
        --text-03: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif;
        --text-04: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif;

    }

`