import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import { Link } from '../Link';

const LINKS = {
  github: {
    link: 'https://github.com/nateychau',
    icon: faGithub
  }, 
  linkedin: {
    link: 'https://www.linkedin.com/in/nathan-chau-363130180/',
    icon: faLinkedin
  }
};

const Container = styled.ul`
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;

  > li:not(:first-child) {
    margin-left: 12px;
  }

  > ${Button} {
    font-size: 12px;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.link};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export function Footer({ className }: { className?: string }) {
  const [showEmail, setShowEmail] = useState(false);

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
      <Button onClick={() => setShowEmail(true)}>Contact: </Button>
      {showEmail && <Link href='mailto:nateychau@gmail.com'>nateychau@gmail.com</Link>}
    </Container>
  )
}
