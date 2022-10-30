import {
  FormContainer,
  FormWrapper,
  Label,
  Logo,
  Title,
    Input
} from "../styles/formStyles";
import addImg from "../assets/addAvatar.png";
function RegisterPage(props) {
  return (
    <FormContainer>
      <FormWrapper>
        <Logo>Lama Chat</Logo>
        <Title>Register</Title>

        <form>
          <Input type="text" placeholder="display name" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Label htmlFor="file">
            <img src={addImg} alt="add avatar" />
            <span>Add an avatar</span>
          </Label>
          <Input type="file" id="file" />

          <button>Sign up</button>
          <p>You do have an account? Login</p>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}

export default RegisterPage;
