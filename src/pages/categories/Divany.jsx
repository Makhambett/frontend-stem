import ProductList from '../../components/ProductList'
import '../categories/Category.css'



const products = [
  {
    id: 1,
    title: 'ДИВАН 1',
    imgs: ['/img/pagesecond/divany/divan1.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 2,
    title: 'ДИВАН 2',
    imgs: ['/img/pagesecond/divany/divan2.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 3,
    title: 'ДИВАН 3',
    imgs: ['/img/pagesecond/divany/divan3.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 4,
    title: 'ДИВАН 4',
    imgs: ['/img/pagesecond/divany/divan4.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 5,
    title: 'ДИВАН 5',
    imgs: ['/img/pagesecond/divany/divan5.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 6,
    title: 'ДИВАН 6',
    imgs: ['/img/pagesecond/divany/divan6.png'],
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
]

export default function Divany() {
  return (
    <ProductList
      products={products}
      title="Диваны"
      backPath="/secondpage"
      backLabel="Мебель"
    />
  )
}