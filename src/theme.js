import { DefaultTheme } from "atomize";

const theme = {
    ...DefaultTheme,
    colors:{
        primaryDark:'#3e3d3cs',
        successDark:'success700',
        successLight:'success400',
    },
    textSize:{
        size: {
            F16:'16px',
            F24:'24px',
        }
    },
    fontFamily: {
        primary: `'Montserrat', sans-serif;`
    }
}

export default theme;