import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleLink = styled(Link).attrs(() => ({
  focused: undefined
}))`
  align-content: center;
  background-color: ${(props) => (props.$focused ? 'var(--dark)' : 'transparent')};
  border-radius: 10px;
  border: 2px solid;
  box-shadow: inset 0 0 12px 4px ${(props) => (props.$focused ? 'var(--blue)' : 'none')};
  border-color: ${(props) => (props.$focused ? 'var(--blue)' : 'var(--white)')};
  color: ${(props) => (props.$focused ? 'var(--blue)' : 'var(--white)')};
  display: inline-block;
  font-size: 20px;
  font-weight: 900;
  height: 50px;
  height: 54px;
  text-align: center;
  text-decoration: none;
  width: 180px;
  margin-left: 25px;
`;

export default function LinkButton({ name, focused }) {
  const path = name === 'HOME' ? '/' : '/nuevo';

  return (
    <>
      <StyleLink to={path} $focused={focused}>
        {name}
      </StyleLink>
    </>
  );
}
