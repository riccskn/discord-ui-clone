import styled from "styled-components";

export const Container = styled.div`

  grid-area: SL;
  width: 74px;
  height: 100vh;
  background: #202225;
  display: flex;
  
  flex-direction: column;
  

`

export const DmBox = styled.div`
    
  width: 48px;
  margin-left: 12px;
  margin-top: 11px;
  height: 48px;
  background: #6E86D6;
  border-radius: 16px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }

`

export const DmLogo = styled.img`

    width: 25px;
    height: 31px;
    

`

export const Separator = styled.div`

  width: 32px;
  height: 2px;
  margin-left: 20px;
  margin-top: 8px;
  background: #2D2F32;
`

export const ServersList = styled.div`

    margin-top: 8px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  

`