import { useFormContext } from 'react-hook-form'
import {
  CepInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  FormContainer,
  GroupInputs,
  StreetInput,
  StreetNumberInput,
  UFInput,
} from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <CepInput
        type="number"
        id="cep"
        placeholder="CEP"
        {...register('cep', { valueAsNumber: true })}
      />
      <StreetInput
        type="text"
        id="street"
        placeholder="Rua"
        {...register('street')}
      />
      <GroupInputs>
        <StreetNumberInput
          type="text"
          id="streetNumber"
          placeholder="Número"
          {...register('streetNumber')}
        />
        <ComplementInput
          type="text"
          id="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
      </GroupInputs>
      <GroupInputs>
        <DistrictInput
          type="text"
          id="district"
          placeholder="Bairro"
          {...register('district')}
        />
        <CityInput
          type="text"
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <UFInput
          type="text"
          id="uf"
          placeholder="UF"
          maxLength={2}
          {...register('uf')}
        />
      </GroupInputs>
    </FormContainer>
  )
}
