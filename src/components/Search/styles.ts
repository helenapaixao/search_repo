import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;

  &::placeholder {
    color: #aaa;
  }
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
