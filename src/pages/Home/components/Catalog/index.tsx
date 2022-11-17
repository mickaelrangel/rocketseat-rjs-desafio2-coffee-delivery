import { CoffeeCard } from './CoffeeCard'
import { CatalogContainer, ProductContainer } from './styles'

const catalog1 = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['Tradicional'],
    price: 9.9,
    srcImg: 'expresso-tradicional',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['Tradicional'],
    price: 9.9,
    srcImg: 'expresso-americano',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['Tradicional'],
    price: 9.9,
    srcImg: 'expresso-cremoso',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['Tradicional', 'Gelado'],
    price: 9.9,
    srcImg: 'cafe-gelado',
  },
]

const catalog2 = [
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['Tradicional', 'Com leite'],
    price: 9.9,
    srcImg: 'cafe-com-leite',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['Tradicional', 'Com leite'],
    price: 9.9,
    srcImg: 'latte',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['Tradicional', 'Com leite'],
    price: 9.9,
    srcImg: 'capuccino',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['Tradicional', 'Gelado'],
    price: 9.9,
    srcImg: 'macchiato',
  },
]

const catalog3 = [
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['Tradicional', 'Com leite'],
    price: 9.9,
    srcImg: 'mochaccino',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['Especial', 'Com leite'],
    price: 9.9,
    srcImg: 'chocolate-quente',
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    srcImg: 'cubano',
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['Especial'],
    price: 9.9,
    srcImg: 'havaiano',
  },
]

const catalog4 = [
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['Especial'],
    price: 9.9,
    srcImg: 'arabe',
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['Especial', 'Alcoólico'],
    price: 9.9,
    srcImg: 'irlandes',
  },
]

export function Catalog() {
  return (
    <CatalogContainer>
      <span>Nosso cafés</span>
      <ProductContainer>
        {catalog1.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              type={coffee.type}
              price={coffee.price}
              srcImg={coffee.srcImg}
            />
          )
        })}
      </ProductContainer>
      <ProductContainer>
        {catalog2.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              type={coffee.type}
              price={coffee.price}
              srcImg={coffee.srcImg}
            />
          )
        })}
      </ProductContainer>
      <ProductContainer>
        {catalog3.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              type={coffee.type}
              price={coffee.price}
              srcImg={coffee.srcImg}
            />
          )
        })}
      </ProductContainer>
      <ProductContainer>
        {catalog4.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              type={coffee.type}
              price={coffee.price}
              srcImg={coffee.srcImg}
            />
          )
        })}
      </ProductContainer>
    </CatalogContainer>
  )
}
