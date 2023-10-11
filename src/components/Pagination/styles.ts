import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`

export const PaginationInfo = styled.span`
  font-size: ${(props) => props.theme.spacing.medium};
`
