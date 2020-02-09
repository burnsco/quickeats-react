import styled from 'styled-components'

const CustomButtonTwo = styled.button`
  color: #1d9af2;
  background-color: #292d3e;
  border: 1px solid #1d9af2;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  height: 32px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
    transform: translateX(-3px);
  }
`

export default CustomButtonTwo
