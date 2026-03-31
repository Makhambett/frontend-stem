import ProductList from '../../components/ProductList'
import './Category.css'

const products = [
  {
    id: 1,
    title: 'СТЕЛЛАЖ 1',
    img: '/img/pagesecond/stellazhi/stellazh1.png',
    description: 'Компактный и удобный стеллаж подойдёт для дома, офиса или магазина. Благодаря мягкой поверхности и аккуратному внешнему виду он не только помогает организовать хранение, но и выглядит современно.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '1200x400x1800',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-ST.UN.1200',
  },
  {
    id: 2,
    title: 'СТЕЛЛАЖ 2',
    img: '/img/pagesecond/stellazhi/stellazh2.png',
    description: 'Компактный и удобный стеллаж подойдёт для дома, офиса или магазина. Благодаря мягкой поверхности и аккуратному внешнему виду он не только помогает организовать хранение, но и выглядит современно.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '1200x400x1800',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-ST.UN.1200',
  },
  {
    id: 3,
    title: 'СТЕЛЛАЖ 3',
    img: '/img/pagesecond/stellazhi/stellazh3.png',
    description: 'Компактный и удобный стеллаж подойдёт для дома, офиса или магазина. Благодаря мягкой поверхности и аккуратному внешнему виду он не только помогает организовать хранение, но и выглядит современно.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '1200x400x1800',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-ST.UN.1200',
  },
]

export default function Stellazhi() {
  return (
    <ProductList
      products={products}
      title="Стеллажи"
      backPath="/secondpage"
      backLabel="Мебель"
    />
  )
}