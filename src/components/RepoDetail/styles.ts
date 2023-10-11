import styled from 'styled-components'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const Container = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  margin: 16px;
  color: #333;
`

export const Property = styled.p`
  font-weight: bold;
  margin: 12px 0;
  font-family: 'Roboto', sans-serif;
  color: #555;
  align-items: center;
`

export const Value = styled.p`
  margin: 6px 0;
  color: #666;
  font-family: 'Roboto', sans-serif;
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
`

export const ModalStyle = styled.div`
  min-height: 18rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
`

export const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
`
