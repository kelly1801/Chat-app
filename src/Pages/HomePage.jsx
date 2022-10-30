import styled from "styled-components";
import SideBar from "../components/SideBar";
import Chat from "../components/Chat";
import Chats from "../components/Chats";
function HomePage() {
  return (
    <Home>
      <PageContainer>
        <SideBar />
        <Chat />

      </PageContainer>
    </Home>
  );
}

export default HomePage;

const Home = styled.main`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageContainer = styled.section`
  border: 1px solid #fff;
  border-radius: 10px;
  width: 65%;
  height: 80%;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 90%; 
 
`;
