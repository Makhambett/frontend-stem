import ProductList from '../../components/ProductList'
import './Category.css'

const products = [
  {
    id: 1,
    title: 'БАРНЫЙ СТУЛ 1',
    img: '/img/pagesecond/stulya/barnye/stul10.png',
    description: 'Высота 75 см, прочный металлический каркас и мягкая обивка делают этот барный стул удобным и стильным элементом любой кухни или бара.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Металлические ножки'],
    size: '400x400x750',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-BA.UN.400',
  },
  {
    id: 2,
    title: 'БАРНЫЙ СТУЛ 2',
    img: '/img/pagesecond/stulya/barnye/stul11.png',
    description: 'Высота 75 см, прочный металлический каркас и мягкая обивка делают этот барный стул удобным и стильным элементом любой кухни или бара.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Металлические ножки'],
    size: '400x400x750',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-BA.UN.401',
  },
  {
    id: 3,
    title: 'БАРНЫЙ СТУЛ 3',
    img: '/img/pagesecond/stulya/barnye/stul3.png',
    description: 'Высота 75 см, прочный металлический каркас и мягкая обивка делают этот барный стул удобным и стильным элементом любой кухни или бара.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Металлические ножки'],
    size: '400x400x750',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-BA.UN.402',
  },
]

export default function Barnye() {
  return (
    <ProductList
      products={products}
      title="Барные стулья"
      backPath="/secondpage/stulya"
      backLabel="Стулья"
    />
  )
}