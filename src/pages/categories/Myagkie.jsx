import ProductList from '../../components/ProductList'
import './Category.css'

const products = [
  {
    id: 1,
    title: 'МЯГКИЙ СТУЛ 1',
    img: '/img/pagesecond/stulya/myagkie/stul7.png',
    description: 'Мягкий и комфортный стул с плотной обивкой и надёжным основанием, идеально подходящий для длительного сидения и уютных интерьеров.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.450',
  },
  {
    id: 2,
    title: 'МЯГКИЙ СТУЛ 2',
    img: '/img/pagesecond/stulya/myagkie/stul8.png',
    description: 'Мягкий и комфортный стул с плотной обивкой и надёжным основанием, идеально подходящий для длительного сидения и уютных интерьеров.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.451',
  },
  {
    id: 3,
    title: 'МЯГКИЙ СТУЛ 3',
    img: '/img/pagesecond/stulya/myagkie/stul9.png',
    description: 'Мягкий и комфортный стул с плотной обивкой и надёжным основанием, идеально подходящий для длительного сидения и уютных интерьеров.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.452',
  },
]

export default function Myagkie() {
  return (
    <ProductList
      products={products}
      title="Мягкие стулья"
      backPath="/secondpage/stulya"
      backLabel="Стулья"
    />
  )
}