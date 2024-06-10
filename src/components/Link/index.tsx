import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.link};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`