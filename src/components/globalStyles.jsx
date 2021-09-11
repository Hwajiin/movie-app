import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
        /* Color */
        --black-color: rgb(17, 17, 17);
        --white-color: white;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: var(--black-color);
        color: var(--white-color);
        width: 100vw;
        padding-top: 60px;
    }
`;

export default GlobalStyles;
