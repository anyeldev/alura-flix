import { useLocation } from 'react-router-dom';
import LinkButton from '../../common/Button';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isNew = location.pathname === '/nuevo';

  return (
    <header className={isHome ? '' : 'header_bg'}>
      <div>
        <img src="/img/logo.png" alt="Logo AluraFlix" />
      </div>
      <div>
        <LinkButton name="HOME" focused={isHome} />
        <LinkButton name="NUEVO VIDEO" focused={isNew} />
      </div>
    </header>
  );
}