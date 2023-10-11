import styled from 'styled-components'
import Modal from 'react-modal'

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h2`
  font-size: 20px;
  font-size: 'Roboto';
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
export const StyledModal = styled(Modal)`
  overlay: {
    backgroundcolor: 'rgba(0, 0, 0, 0.5)';
  }
  content: {
    width: 200px;
    height: 100%;
    margin: auto;
    borderradius: 8px;
    boxshadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
  }
`
