import styled from "styled-components";
import { Label, Input as FormInput } from "../styles/formStyles";
import add from "../assets/addAvatar.png";
import attach from "../assets/attach.png";

function Input() {
  return (
    <InputContainer>
      <input type="text" placeholder="Type something..." />
      <SendContainer>
        <img src={attach} alt="attach" />
        <FormInput type="file" id="file" />
        <Label htmlFor="file">
          <img src={add} alt="add and avatar" />
        </Label>
        <button>Send</button>
      </SendContainer>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  height: 3.1rem;
  background-color: #fff;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
    outline: none;
    color: #2f2d52;
    font-size: 1.1rem;

    &::placeholder {
      color: lightgray;
    }
  }
`;
const SendContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 1.5rem;
    object-fit: contain;
    cursor: pointer;
  }

  button {
    border: none;
    padding: 0.5rem 0.9rem;
    color: #fff;
    background-color: #8da4f1;
    cursor: pointer;
  }
`;
