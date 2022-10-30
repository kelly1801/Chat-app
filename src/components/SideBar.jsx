import styled from "styled-components";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
function SideBar() {
    return (
        <SideBarContainer>

            <NavBar/>
            <Search/>
            <Chats/>
            <Chats></Chats><Chats></Chats><Chats></Chats>
        </SideBarContainer>
    );
}

export default SideBar;

const SideBarContainer = styled.aside`
  background-color: #3e3c61;
  flex: 1;
  color: #fff;
  @media screen and (max-width: 768px) {
 
      position: relative;

    
  }
`