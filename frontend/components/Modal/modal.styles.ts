import css from 'styled-jsx/css';

export const modalStyles = css`
  :global(body) {
    overflow: hidden;
  }

  .backdrop {
    position: fixed;
    background: #4d4d4dcc;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .modal {
    background: #ffffff;
    border-radius: 4px;
    position: relative;
    padding: 1.5rem;
    overflow: auto;
    width: 300px;
    margin: 5vh auto;
  }

  .modal div:first-child {
    display: flex;
    justify-content: space-between;
  }

  .modal-content {
    padding-top: 2rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  button > svg {
    height: 100%;
  }
`;
