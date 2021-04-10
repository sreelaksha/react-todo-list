import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-size: props.theme.textSize.size.F16;
        box-sizing:border-box;
    }
    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: props.theme.fontFamily.primary;
        color:${props => props.theme.colors.primaryDark};
    }
    body {
        font-size:1rem;
        line-height:1.5;
    }
    .container{
        max-width:1440px;
        width:90%;
        margin:0 auto;
    }
`;