import styled from "styled-components";

export const Grid = styled.div`

   width: 100%;
   height: 100vh;
   display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
   grid-template-areas: 
           'SL CL CI CI'
           'SL CL CD ML'
           'SL UI CD ML';
    

`