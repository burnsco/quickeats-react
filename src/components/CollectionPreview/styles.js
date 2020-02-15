import styled from '@xstyled/styled-components'

export const CollectionPreviewContainer = styled.section`
  display: flex;
  margin-bottom: 40px;
  margin-right: 10px;
  margin-left: 10px;
  flex-direction: column;
`

export const TitleContainer = styled.h1`
  margin-top: 50px;
  font-size: 34px;
  color: grey;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0 auto 30px;
  text-decoration: underline;
`

export const PreviewContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
