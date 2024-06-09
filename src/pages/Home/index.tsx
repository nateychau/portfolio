import styled from 'styled-components';

import { Footer } from '../../components/Footer';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 12px 24px;
  background-color: #111111;

  > h1 {
    font-style: normal;
    font-size: 48px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.default};
    padding-bottom: 8px;
  }
`;

const Body = styled.div`
  margin-top: 12px;
  max-width: 800px;
  color: ${({ theme }) => theme.palette.default};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.palette.link};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`

export function HomePage() {
  return (
  <Page>
    <h1>Nathan Chau</h1>
    <Body>Software Engineer</Body>
    <Body>Currently building event management solutions @&nbsp;<Link href="https://gatsby.events/" target="_blank" className="colored-text">Gatsby Labs</Link></Body>
    <Footer />
  </Page>
  )
}
