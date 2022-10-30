import styled from "styled-components";

function Chats() {
  return (
    <div>
      <UserChat>
        <img
          src="https://media.gq.com.mx/photos/62a2346ddca0fa1ea65f7d10/16:9/w_2560%2Cc_limit/chris%2520evans-1401854667.jpg"
          alt="user"
        />
        <UserChatInfo>
          <span>Chris</span>
          <p>hello</p>
        </UserChatInfo>
      </UserChat>
    </div>
  );
}

export default Chats;

const UserChat = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #2f2d52;
  }
  img {
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const UserChatInfo = styled.div`
  span {
    font-size: 1.1rem;
    font-weight: 500;
  }
  p {
    font-size: 0.8rem;
    color: lightgray;
    margin: 0.2rem;
  }
`;
