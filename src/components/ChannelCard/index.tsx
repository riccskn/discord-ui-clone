import React from "react";
import {ChannelCardContainer, ChannelNameText, ChannelTypeText} from "./styles";
import {HiUserAdd} from "react-icons/hi";
import {IoMdSettings} from "react-icons/io";

interface IChannelCardProps {
    name: string
}

export default function ChannelCard(props: IChannelCardProps) {
    return (
        <ChannelCardContainer>
             <ChannelTypeText>#</ChannelTypeText>
             <ChannelNameText>{props.name}</ChannelNameText>

            <HiUserAdd fontSize={"18"} color={"#828386"} style={{paddingLeft: "95.67px",paddingTop: "10px"}}/>
            <IoMdSettings fontSize={"18"} color={"#828386"} style={{paddingLeft: "6.44",paddingTop: "10px"}}/>
        </ChannelCardContainer>
    )
}