import styled from 'styled-components';

const Button = styled.button`
  padding: 4px;
  background-color: ${({ theme }) => theme.bodyBg};
  color: ${({ theme }) => theme.color};
  margin-left: 1rem;
`;

export default Button;
