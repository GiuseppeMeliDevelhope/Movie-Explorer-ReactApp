import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";






const LoaderWrapper = styled('div')(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: useTheme().spacing(3),

}));




const Loader= () =>{
    return(
       
        <LoaderWrapper>
            <CircularProgress />
        </LoaderWrapper>
      
    )
};


export default Loader;