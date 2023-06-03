import React from "react";
import { ThemeProvider, ThemeProviderProps, createTheme } from '@mui/material/styles';
import { dark } from "@mui/material/styles/createPalette";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import title from '../title.png';
import { styled } from "@mui/system";
import Searchbar from "../Containers/Searchbar";

const darkTheme = createTheme({
    palette: {
        mode:'dark'
    }
})

const Img= styled('img')({
    marginLeft: 'auto',
    marginRight:'auto',
    display:'block',
    width:500,
    maxWidth:'100%'
})

const LayoutWrapper= styled('div')(({theme})=>({
    margin:24,
    width:'auto',
    [theme.breakpoints.up("lg")]: {
        marginLeft:'auto',
        marginRight:'auto',
        width:theme.breakpoints.values.lg
    }
}));

const Layout = ({children}) =>{
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <LayoutWrapper>
                <Link to="/">
                    <Img src={title} alt="The movie db" />

                
                </Link>
                <Searchbar />
                {children}
            </LayoutWrapper>
           

        </ThemeProvider>
    );
}

export default Layout;