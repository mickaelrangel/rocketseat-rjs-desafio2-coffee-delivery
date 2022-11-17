import styled from 'styled-components'

export const IntroContainer = styled.main`
  flex: 1;
  display: flex;

  flex-direction: row;
  gap: 3.5rem;
  margin: 5.75rem 0;
`

export const InformativeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  flex-direction: column;
  gap: 1rem;
`

export const DescriptionTitle = styled.div`
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.div`
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 4.125rem;
  gap: 2.5rem;
`

export const ItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 0;
  padding: 0.5rem;
  border-radius: 50%;
`

export const ShoppingCartIcon = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const TimerIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const PackageIcon = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const CoffeeIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.purple};
`
