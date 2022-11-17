import styled from 'styled-components'

export const HeaderContainer = styled.header`
  flex: 1;
  display: flex;

  flex-direction: row;
  gap: 52.65rem;
  margin: 2rem 0;
`
export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const InfoLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 8.9375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  background: ${(props) => props.theme['yellow-light']};

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    margin-top: -2rem;
    margin-left: 2rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    border-radius: 50%;

    font-size: 0.75rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`
