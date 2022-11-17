import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const SelectPayment = styled.div.attrs(
  (props: { isPaymentSelected: boolean }) => props,
)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;
  font-size: 0.75rem;
  width: 11.17rem;
  height: 3.18rem;
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      !props.isPaymentSelected && props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  background: ${(props) =>
    props.isPaymentSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};

  ${(props) =>
    props.isPaymentSelected
      ? css`
          border: 1px solid #8047f8;
        `
      : 0}
`
