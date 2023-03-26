import styled from "styled-components";

export const Box = styled.div`

   width: 48px;
   height: 48px;
  
   border-radius: 22px;
   margin-left: 12px;
   margin-right: 12px;
   margin-top: 8px;

   background: #36393F;
  
  &&:hover {
    cursor: pointer;
  }
  
`
export const NewNotificationPopup = styled.div`

   position: relative;
   top: 20px;
  
   width: 10px;
   height: 10px;
   background: #FFFFFF;
   border-radius: 22px;
   right: 18px;
   overflow: hidden;

`

export const NotificationsPopup = styled.div`
  
  position: relative;
  width: 16px;background: #F84A4B;
  border: 4px solid #202225;
  border-radius: 22px;
  height: 16px;
  left: 30px;
  top: 15px;

`