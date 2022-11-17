import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 16rem;
  border: 0;
  border-top-right-radius: 32px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;

  background: ${(props) => props.theme['base-card']};
`

export const ImageCoffee = styled.div`
  margin-top: calc(0px - 1rem);
`

export const CoffeType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 16px;
  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CoffeeName = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;

  margin-top: 1rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeDescription = styled.div`
  display: flex;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-label']};
`

export const AddCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: row;
`

export const Currency = styled.div`
  font-size: 0.875rem;
  padding: 0.2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Price = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CounterInput = styled.input`
  width: 2rem;
  background: transparent;
  border: 0;
  text-align: center;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
  }
`

export const AddCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 2.37rem;
  height: 2.37rem;
  border: 0;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const AddCartIcon = styled.div``
