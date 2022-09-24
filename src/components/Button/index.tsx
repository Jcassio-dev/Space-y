
import { GlobalStyles } from "../../styles/globalStyles";
import * as C from './style'

interface ButtonProps {
    text: string;
}

export const Button = ( {text}: ButtonProps) => {
    return(
    <>
    <GlobalStyles />
    <C.Button> {text} </C.Button>
    </>
    );
}
