import styled from 'styled-components'

export const CatalogContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 5rem;

  span {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ProductContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
