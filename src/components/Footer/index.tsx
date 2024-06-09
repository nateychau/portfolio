import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const LINKS = {
  github: {
    link: 'https://github.com/nateychau',
    icon: faGithub
  }, 
  linkedin: {
    link: 'https://www.linkedin.com/in/nathan-chau-363130180/',
    icon: faLinkedin
  },
  instagram: {
    link: 'https://www.instagram.com/aybyal/',
    icon: faInstagram
  },
};

const Container = styled.ul`
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;

  > li:not(:first-child) {
    margin-left: 12px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.link};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export function Footer({ className }: { className?: string }) {
  return (
    <Container className={className}>
      {Object.keys(LINKS).map((key) => {
        const item = LINKS[key as keyof typeof LINKS];
        return (
          <li key={key}>
            <a href={item.link} target="_blank">
              <StyledIcon icon={item.icon} size='lg' />
            </a>
          </li>
        )
      })}
    </Container>
  )
}
