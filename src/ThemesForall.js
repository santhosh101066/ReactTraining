import { createContext } from "react"

export const theme={
    light:{
        backgroundColor:'white',
        color:'black'
    },
    dark:{
        backgroundColor:'rgb(40, 40, 40)',
        color:'white'
    }
}
export  const setTheme=createContext(theme.light)