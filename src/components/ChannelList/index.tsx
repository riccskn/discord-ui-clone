import React from "react";
import {
    ChannelTitle,
    ChannelTitleBox,
    Container,
    TextChannelsList,
    TextChannelsTitle
} from "./styles";
import {GrAdd, GrFormAdd, IoIosArrowDown, IoMdAdd} from "react-icons/all";
import ChannelCard from "../ChannelCard";

export default function ChannelList() {
    return (
        <Container>
          <ChannelTitleBox>
             <ChannelTitle>Servidor do Rick</ChannelTitle>
              <IoIosArrowDown color={"#FFF"} fontSize={"25px"} style={{marginLeft: "71px",marginRight: "9",marginTop: "12.5px"}}/>
          </ChannelTitleBox>

         <TextChannelsList>
             <TextChannelsTitle>CANAIS DE TEXTO</TextChannelsTitle>
             <IoMdAdd color="#828386"  style={{paddingLeft: "96.87px"}} />
         </TextChannelsList>

         <ChannelCard name={"working"}/>

        </Container>
    )
}