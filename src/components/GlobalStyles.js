import { createGlobalStyle } from "styled-components";
import { WHITE } from "Styles";
import { BLACK } from "../Styles";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        padding-top:50px;
        margin:0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:${BLACK};
        color:${WHITE}
    }
`;

export default GlobalStyles;
