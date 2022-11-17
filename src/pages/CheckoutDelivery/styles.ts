import styled from 'styled-components'

export const CheckoutDeliveryContainer = styled.main`
  flex: 1;
  display: flex;
  margin: 2.5rem 0;

  form {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  span {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
