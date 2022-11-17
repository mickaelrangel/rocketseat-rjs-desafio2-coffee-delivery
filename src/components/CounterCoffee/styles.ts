import styled from 'styled-components'

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 4.5rem;
  height: 2.3rem;
  border: 0;
  border-radius: 6px;
  margin-left: 1.625rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
`

export const IncrementArrowsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  cursor: pointer;
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
