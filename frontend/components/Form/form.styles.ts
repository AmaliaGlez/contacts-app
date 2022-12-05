import css from 'styled-jsx/css';

export const formStyles = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.5rem 0;
  }

  div {
    margin-bottom: 1rem;
  }

  label {
    color: #ffffff;
    margin-right: 0.5rem;
  }

  input {
    background: #7c7c7c;
    border: 1px solid #7c7c7c;
    border-radius: 6px;
    color: #ffffff;
    padding: 0.5rem;
  }

  input::placeholder {
    color: #ffffff;
  }

  input:focus,
  input:active {
    outline: none;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px solid #ffffff;
  }

  button {
    background: #7c7c7c;
    color: #ffffff;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #7c7c7c;
    padding: 0.5rem;
    margin-right: 1rem;
    width: inherit;
    text-transform: uppercase;
    font-weight: bold;
  }

  .buttons {
    display: flex;
    margin-top: 1rem;
    width: 150px;
  }

  p {
    color: #d52b2b;
  }
`;
