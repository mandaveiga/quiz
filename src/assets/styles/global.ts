import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-background: #F5F5F5;
  
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background: var(--color-background);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button
    textarea {
        font: 500 1.6rem Poppins;
    }
`;
