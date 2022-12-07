import css from 'styled-jsx/css';

export const searchStyles = css`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
  }

  input {
    background: var(--primary-background-color);
    border: 2px solid var(--secondary-color-dark);
    border-radius: 25px;
    color: var(--secondary-color);
    padding: 1rem 1rem 1rem 3.5rem;
    flex-grow: 1;
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  input::placeholder {
    color: var(--secondary-color-dark);
  }

  input:focus,
  input:active {
    border-radius: 15px;
    background: var(--secondary-background-color);
    outline: none;
  }

  span {
    all: unset;
    position: absolute;
    left: 20px;
  }
`;
