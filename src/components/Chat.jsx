import styled from "styled-components";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";

import Messages from "./Messages";
import Input from "./Input";
function Chat() {
  return (
    <ChatContainer>
      <ChatInfo>
        <span>Chris</span>
        <ChatIcons>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </ChatIcons>
      </ChatInfo>
      <Messages/>
        <Input/>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.article`
  flex: 2;
`;
const ChatInfo = styled.div`
  height: 3.1rem;
  background-color: #5d5b8d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: lightgray;
`;
const ChatIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    height: 1.5rem;
    cursor: pointer;
  }
`;
