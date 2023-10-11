import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
  font-family: 'Roboto';
  align-items: center;
  justify-content: center;
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin: 0 5px;

      a {
        text-decoration: none;
        color: #333;
        background-color: #f5f5f5;
        padding: 10px 15px;
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
      margin: 0 5px;
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
  font-size: 20px;
  color: #ff0000;
`
