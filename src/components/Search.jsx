import styled from "styled-components";

function Search(props) {
  return (
    <SearchContainer>
      <SearchForm>
        <input type="text" placeholder="Find a user" />

      </SearchForm>
    </SearchContainer>
  );
}

export default Search;
const SearchContainer = styled.div`
  border-bottom: 1px solid gray;
`;
const SearchForm = styled.form`
  padding: 0.5rem;
  input {
    background-color: transparent;
    border: none;
    color: #fff;
    outline: none;

    &::placeholder {
      color: lightgray;
    }
  }
`;

