import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 38px;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0 auto 30px;
`
export const CollectionItems = styled.div`
  margin-top: 2em;
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
