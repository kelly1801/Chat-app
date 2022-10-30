import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormWrapper = styled.div`
  background-color: #fff;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

   

    button {
      background-color: #7b96ec;
      color: #fff;
      padding: 10px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }

    p {
      color: #5d5b8d;
      font-size: 0.7rem;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;

export const Logo = styled.span`
  color: #5d5b8d;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const Title = styled(Logo)`
  font-size: 0.7rem;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8da4f1;
  font-size: 0.7rem;
  cursor: pointer;
  
  img {
    width: 2.25rem;
  }
`;

export const Input = styled.input`
   padding: 0.9rem;
    border: none;
    border-bottom: 1px solid #a7bcff;
    width: 250px;
&::placeholder {
        color: rgb(175, 175, 175);
        text-transform: capitalize;
    }
&[type="file"] {
        display: none;
    }
`
