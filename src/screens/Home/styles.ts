import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin: 0 1rem;

      a {
        text-decoration: none;
        color: #333;
        background-color: #f5f5f5;
        padding: 1rem 1.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;

        &:hover {
          background-color: #e5e5e5;
        }
      }
    }

    .previous,
    .next {
      a {
        background-color: #007bff;
        color: #fff;
        border: 1px solid #007bff;

        &:hover {
          background-color: #0056b3;
          border: 1px solid #0056b3;
        }
      }
    }

    .break {
      flex: 0 0 30px;
      border: none;
      margin: 0 1rem;
    }

    .selected {
      a {
        background-color: #007bff;
        color: #fff;
        border: 1px solid #007bff;
      }
    }
    .previous[disabled] {
      background-color: #ccc;
      color: #999;
      border: 1px solid #ccc;
      pointer-events: none;
      cursor: not-allowed;
    }

    .previous[disabled]:hover {
      background-color: #ccc;
      border: 1px solid #ccc;
    }
  }
`

export const ErrorMessage = styled.p`
  font-size: 2rem;
  color: #ff0000;
  margin-top: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
