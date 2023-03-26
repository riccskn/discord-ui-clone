import React from "react";
import {Grid} from "./styles";

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout(props: ILayoutProps) {
   return (
       <Grid>
           {props.children}
       </Grid>
   )
}