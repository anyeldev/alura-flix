import styled from 'styled-components';

const InputBox = styled.div`
  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-2);
  width: 100%;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 15px;
  }

  input {
    background-color: transparent;
    border-radius: 10px;
    border: 3px solid var(--dark-gray);
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
    outline: none;
    padding: 16px 10px;
    width: 100%;

    &:focus {
      border-color: var(--blue);
    }
  }
`;

export default function Input({ titleInput, type, placeholder, className, name, value, onChange }) {
  return (
    <InputBox className={className}>
      <label htmlFor={name}>{titleInput}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </InputBox>
  );
}
