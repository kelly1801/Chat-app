import styled, { css } from "styled-components";

function Message() {
  return (
    <MessageContainer owner>
      <MessageInfo>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE484U9ooFaaYi3-nAmrdtAfE1s3wgSkbPA&usqp=CAU"
          alt=""
        />
        <span>Just Now</span>
      </MessageInfo>
      <MessageContent>
        <p>Hello</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bI4tMiyplotDjj_dO7xNHYVhjkr9bU38gg&usqp=CAU"
          alt=""
        />
      </MessageContent>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.2rem;

  ${(props) =>
    props.owner &&
    css`
  
    flex-direction: row-reverse;
    
    ${MessageContent} {
      align-items: flex-end;
      p {background-color: #8da4f1;

        color: #fff;
        border-radius: 0.5rem 0 0.5rem 0.5rem;
      }} 
    }
   
    
  `}
`;
const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    
    width: 50%;
    object-fit: cover;
  }
  p {
    background-color: #fff;
    padding: 0.5rem 1.2rem;
    border-radius: 0 10px 10px;
    max-width: max-content;
  }
`;
