import styled from 'styled-components'

const MainGrid = styled.main`
  width:100%;
  grid-gap: 10px;
  padding: 16px;
  margin-left:auto;
  margin-right:auto;
  max-width:500%;
  .profileArea{
    display:none;    
    @media(min-width: 860px){
      display:block;
    }
  }
 @media(min-width: 860px){
    max-width:1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }

  .profileArea{
    grid-area: 'profileArea'
  }.welcomeArea{
    grid-area: 'welcomeArea'
  }.profileRelationsArea{
    grid-area: 'profileRelationsArea'
  }
`;

export default MainGrid;