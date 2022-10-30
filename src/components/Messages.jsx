import Message from "./Message";
import styled from "styled-components";
function Messages() {
  return (
    <MessagesContainer>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </MessagesContainer>
  );
}

export default Messages;

const MessagesContainer = styled.div`
background-color: #ddddf7;
  padding: 0.5rem;
  height: calc(100% - 6rem);
  overflow-y: scroll;
`
