import styled from 'styled-components'

export const RepoCardContainer = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin: 16px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Text = styled.p`
  font-size: 14px;
  color: #586069;
`

export const TextRepo = styled.h2`
  color: #0366d6;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
