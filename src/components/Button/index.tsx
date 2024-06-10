import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  user-select: none;
  outline: none;

  height: max-content;
  width: max-content;

  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.palette.default};

  color: ${({ theme }) => theme.palette.default};
  background-color: transparent;

  transition: background-position 0.4s;
  background-size: 300% 100%;
  background-image: linear-gradient(45deg, ${({ theme }) => theme.palette.default} 10%, transparent 90%);
  background-position: 100% 0;

  &:hover {
    background-position: 70% 0%;
    border-color: ${({ theme }) => theme.palette.default};
  }

  &:focus {
    outline: none;
  }
`;
