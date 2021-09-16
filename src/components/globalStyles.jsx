import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
        /* Color */
        --black-color: rgb(17, 17, 17);
        --white-color: white;
        --grey-color: rgba(255, 255, 255, 0.6);
        --point-color: #546de5;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: var(--black-color);
        color: var(--white-color);
        width: 100vw;
        /* padding-top: 50px; */
    }
`;

export default GlobalStyles;
