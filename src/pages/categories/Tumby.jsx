import ProductList from '../../components/ProductList'
import './Category.css'

const products = [
  {
    id: 1,
    title: 'ТУМБА 1',
    img: '/img/pagesecond/tumby/tumba1.png',
    description: 'Удобная и практичная модель. Подходит для ежедневного использования. Простая конструкция, аккуратный внешний вид. Хорошо вписывается в любое пространство.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
  {
    id: 2,
    title: 'ТУМБА 2',
    img: '/img/pagesecond/tumby/tumba2.png',
    description: 'Компактный, надёжный, функциональный. Отличается от первой модели небольшими конструктивными особенностями, но сохраняет те же преимущества: простоту и удобство.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
  {
    id: 3,
    title: 'ТУМБА 3',
    img: '/img/pagesecond/tumby/tumba3.png',
    description: 'Компактный, надёжный, функциональный. Отличается от первой модели небольшими конструктивными особенностями, но сохраняет те же преимущества: простоту и удобство.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
]

export default function Tumby() {
  return (
    <ProductList
      products={products}
      title="Тумбы"
      backPath="/secondpage"
      backLabel="Мебель"
    />
  )
}