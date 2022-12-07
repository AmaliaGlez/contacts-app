import css from 'styled-jsx/css';

export const formStyles = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem 0;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
    width: 100%;
    flex: 1;
  }

  label {
    font-size: 0.9rem;
    color: var(--secondary-color);
  }

  input {
    background: var(--primary-background-color);
    border: 2px solid var(--secondary-color-dark);
    border-radius: 15px;
    color: var(--secondary-color);
    padding: 1rem;
    width: 100%;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  input::placeholder {
    color: var(--secondary-color-dark);
  }

  input:focus,
  input:active {
    border-radius: 10px;
    background: var(--secondary-background-color);
    outline: none;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  p {
    color: var(--tertiary-color-light);;
    font-size: 0.9rem;
  }
`;
