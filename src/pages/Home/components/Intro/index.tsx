import {
  DescriptionTitle,
  InformativeContainer,
  IntroContainer,
  ItemsContainer,
  ItemsGroup,
  Subtitle,
  Title,
  ItemDescription,
  ShoppingCartIcon,
  TimerIcon,
  PackageIcon,
  CoffeeIcon,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import coffeeDelivery from '../../../../assets/intro-coffee-delivery.svg'
import { useTheme } from 'styled-components'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <InformativeContainer>
        <Title>
          <DescriptionTitle>
            Encontre o café perfeito para qualquer hora do dia
          </DescriptionTitle>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </Title>
        <ItemsContainer>
          <ItemsGroup>
            <ItemDescription>
              <ShoppingCartIcon>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={theme.background}
                />
              </ShoppingCartIcon>
              <span>Compra simples e segura</span>
            </ItemDescription>
            <ItemDescription>
              <TimerIcon>
                <Timer size={16} weight="fill" color={theme.background} />
              </TimerIcon>
              <span>Entrega rápida e rastreada</span>
            </ItemDescription>
          </ItemsGroup>
          <ItemsGroup>
            <ItemDescription>
              <PackageIcon>
                <Package size={16} weight="fill" color={theme.background} />
              </PackageIcon>
              <span>Embalagem mantém o café intacto</span>
            </ItemDescription>
            <ItemDescription>
              <CoffeeIcon>
                <Coffee size={16} weight="fill" color={theme.background} />
              </CoffeeIcon>
              <span>O café chega fresquinho até você</span>
            </ItemDescription>
          </ItemsGroup>
        </ItemsContainer>
      </InformativeContainer>
      <img src={coffeeDelivery} alt="" />
    </IntroContainer>
  )
}
