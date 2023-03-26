import React from "react";
import Logo from "../../assets/logo.png"
import {Container, DmBox, DmLogo, Separator, ServersList} from "./styles";
import ServerData from "../ServerData";

export default function ServerList() {
    return (
        <Container>
           <DmBox>
             <DmLogo src={Logo}/>
           </DmBox>
            <Separator/>

           <ServersList>
               <ServerData hasNotification={true} notificationsCount={0}/>
               <ServerData hasNotification={true} notificationsCount={0}/>
               <ServerData hasNotification={true} notificationsCount={0}/>
               <ServerData hasNotification={true} notificationsCount={0}/>
               <ServerData hasNotification={true} notificationsCount={1}/>
               <ServerData hasNotification={true} notificationsCount={1}/>
               <ServerData hasNotification={true} notificationsCount={0}/>
               <ServerData hasNotification={true} notificationsCount={0}/>
           </ServersList>

        </Container>
    )
}