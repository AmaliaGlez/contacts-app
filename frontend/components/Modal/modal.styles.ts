import css from 'styled-jsx/css';

export const modalStyles = css`
  :global(body) {
    overflow: hidden;
  }

  .backdrop {
    position: fixed;
    background: var(--transparent-background-color);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .modal {
    background: var(--secondary-color);
    border-radius: 15px;
    position: relative;
    padding: 1.5rem;
    overflow: auto;
    width: 300px;
    margin: 20% auto;
  }

  .modal div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-content {
    padding-top: 1.5rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
