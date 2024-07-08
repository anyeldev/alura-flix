import styled from 'styled-components';

const Content = styled.div`
  align-content: center;
  background-color: ${(props) => props.$bgTitle};
  border-radius: 15px;
  margin: -10px 0 40px;
  width: 432px;
  height: 70px;

  h2 {
    color: var(--white);
    font-size: 32px;
    font-weight: 900;
    text-align: center;
  }

  @media (max-width: 1024px) {
    margin: 93px auto 40px;
  }

  @media (max-width: 430px) {
    width: 286px;

    h2 {
      font-size: 24px;
    }
  }
`;

export default function Title({ name, bgTitle }) {
  return (
    <Content $bgTitle={bgTitle}>
      <h2>{name}</h2>
    </Content>
  );
}
