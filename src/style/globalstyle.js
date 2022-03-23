import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    body{
        font-family: 'Heebo', sans-serif;
        background: #030327;
        background-image: url('../components/img/Starts.svg');
    }

        /* width */
    ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
}

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: #222;
}

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: var(--mars); 
    border-radius: 10px;
}

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: var(--mars-dark); 
    }

    :root{

        /* COlORS VARIABLES */

            /* Primarys */
        --space: #0B1E8A;
        --space-light: #3d68b2;
        --space-dark: #040327;
        --mars: #E85937;
        --mars-light: #FF8C70;
        --mars-dark: #CF3F1D;
        --gray-01: #0D0E13;
        --gray-02: #2C2D3A;
        --gray-03: #60616F;
        --gray-04: #898A93;
        --gray-05: #D5D5DB;
        --white: #fff;
                                                    
            /* Auxiliary's */
        --uranus: #24FFE9;
        --sun: #F5D15F;
        --jupiter: #E00E34;
        --earth: #0FDD86;
        --saturn: #554AD7;
            /* Others */
        --border-radiusB: 6px;
        
    }
`;
