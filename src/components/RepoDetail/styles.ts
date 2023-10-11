import styled from 'styled-components'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h2`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  color: #333;
`

export const Property = styled.p`
  font-weight: bold;
  margin: 10px 0;
  color: #555;
`

export const Value = styled.p`
  margin: 5px 0;
  color: #666;
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const StyledModal = styled.div`
  overlay {
    background-color: #3434;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
  content {
    width: 320px;
    height: auto;
    margin: 20px auto 0;
    border: none;
    background-color: #3434;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
