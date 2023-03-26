import React from "react";
import {Box, NewNotificationPopup, NotificationsPopup} from "./styles";

interface IServerDataProps {
  hasNotification: boolean

  notificationsCount: number

}

export default function ServerData(props: IServerDataProps) {
    return (
      <Box>
          {props.hasNotification && <NewNotificationPopup/>}
          {props.notificationsCount > 0 && <NotificationsPopup/> }
      </Box>
    )
}