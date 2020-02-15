import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-bottom: 50px;
  }
`
export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:first-child {
    width: 25%;
  }
  &:last-child {
    width: 8%;
    margin-right: 20px;
  }
`

export const TotalContainer = styled.div`
  margin-top: 30px;
  font-size: 36px;
`

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
  margin-bottom: 50px;
  color: red;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`
