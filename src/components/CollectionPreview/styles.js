import styled from 'styled-components'

export const CollectionPreviewContainer = styled.section`
  display: flex;
  align-self: auto;
  margin: 20px auto;
  padding: 0px 16px;
  flex-direction: column;
`
export const TitleContainer = styled.h1`
  margin-top: 50px;
  font-size: 34px;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0 auto 30px;
  &:hover {
    border-bottom: 1px solid black;
    border-width: thick;
  }
`
export const PreviewContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`
