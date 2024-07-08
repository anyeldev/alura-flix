import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyleFooter = styled.div`
  background-color: var(--dark);
  border-top: 4px solid var(--blue);
  box-shadow: 0 -5px 15px -5px var(--blue);
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  padding: 23px 0;
  width: 100%;

  .box {
    align-content: center;
    background-color: rgb(34 113 209 / 0.24);
    border-radius: 50px;
    border: 2px solid var(--blue);
    padding: 0 15px;
  }
`;

const StyleLinkFooter = styled(Link)`
  align-content: center;
  align-items: center;
  color: var(--blue);
  display: flex;
  font-family: var(--font-2);
  font-size: 20px;
  font-weight: 900;
  height: auto;
  justify-content: center;
  text-decoration: none;
`;

export default function FooterIcon() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <StyleFooter>
      <div className={isHome ? 'box' : ''}>
        <StyleLinkFooter to="/">
          <img src={isHome ? '/icon/home_active.svg' : '/icon/home.svg'} alt="Home Icon" />
          <span>{isHome ? 'HOME' : ''}</span>
        </StyleLinkFooter>
      </div>
      <div className={isHome ? '' : 'box'}>
        <StyleLinkFooter to="/nuevo">
          <img src={isHome ? '/icon/add.svg' : '/icon/add_active.svg'} alt="Add Icon" />
          <span>{isHome ? '' : 'NUEVO VIDEO'}</span>
        </StyleLinkFooter>
      </div>
    </StyleFooter>
  );
}
