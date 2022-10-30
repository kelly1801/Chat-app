import { FormContainer, FormWrapper, Logo, Title } from "../styles/formStyles";
import addImg from "../assets/addAvatar.png";

function LoginPage() {
  return (
    <FormContainer>
      <FormWrapper>
        <Logo>Lama Chat</Logo>
        <Title>Login</Title>

        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
          <p>You don't have an account? Register</p>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}

export default LoginPage;
