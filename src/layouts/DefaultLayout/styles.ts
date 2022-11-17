import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  margin: auto 10rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
