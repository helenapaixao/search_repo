import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) => (props.disabled ? '#586069' : '#007bff')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#586069' : '#0056b3')};
  }
`
