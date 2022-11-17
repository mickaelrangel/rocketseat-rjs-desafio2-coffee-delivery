import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { OrderContext } from '../../contexts/OrderContext'
import { CoffeeSummary } from './components/CoffeeSummary'
import { PaymentoInfo } from './components/PaymentInfo'
import { CheckoutDeliveryContainer } from './styles'

const addressFormValidationSchema = zod.object({
  cep: zod.number(),
  street: zod.string().min(1, 'O campo Rua é obrigatório'),
  streetNumber: zod.string().min(1, 'O campo Número é obrigatório'),
  complement: zod.string(),
  district: zod.string().min(1, 'O campo Bairro é obrigatório'),
  city: zod.string().min(1, 'O campo Cidade é obrigatório'),
  uf: zod
    .string()
    .min(1, 'O campo UF é obrigatório')
    .max(2, 'Campo UF deve ter no máximo 2 caracteres'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function CheckoutDelivery() {
  const navigate = useNavigate()
  const { order, confirmOrder, isOrderConfirmed, deleteOrder } =
    useContext(OrderContext)
  const checkoutForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { handleSubmit, watch } = checkoutForm

  const cep = watch('cep')
  const street = watch('street')
  const streetNumber = watch('streetNumber')
  const district = watch('district')
  const city = watch('city')
  const uf = watch('uf')

  const isSubmitDisabled =
    !cep ||
    !street ||
    !streetNumber ||
    !district ||
    !city ||
    !uf ||
    order?.listCoffee.length === 0 ||
    order?.payment === null

  function handleConfirmOrder(data: AddressFormData) {
    confirmOrder(data)
    navigate('/confirmedOrder', { replace: true })
  }

  useEffect(() => {
    if (isOrderConfirmed) {
      deleteOrder()
    }
  }, [])

  return (
    <CheckoutDeliveryContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
        <FormProvider {...checkoutForm}>
          <PaymentoInfo />
        </FormProvider>

        <CoffeeSummary isSubmitDisabled={isSubmitDisabled} />
      </form>
    </CheckoutDeliveryContainer>
  )
}
