import React from "react";
import {Container, ProfileBox, ProfilePic, TagText, TextsBox, UserText} from "./styles";

export default function UserInfo() {
    return (
        <Container>
         <ProfileBox>
          <ProfilePic/>
         </ProfileBox>
         <TextsBox>
             <UserText>riccskn</UserText>
             <TagText>#8450</TagText>
         </TextsBox>
        </Container>
    )
}