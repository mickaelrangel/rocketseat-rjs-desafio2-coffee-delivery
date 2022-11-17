import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const GroupInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  padding: 0.75rem;
  height: 2.62rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
  }
`

export const StreetInput = styled(BaseInput)`
  width: 35rem;
`

export const StreetNumberInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`

export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`
export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`
