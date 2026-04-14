import ProductList from '../../components/ProductList'
import '../categories/Category.css'

const products = [
  {
    id: 1,
    title: 'КРЕСЛО 1',
    img: '/img/pagesecond/kreslo/kreslo1.png',
    description: 'Каркас: стеклопластик, Ткань: велюр, микро велюр, рогожка.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Ширина 94 см, Высота 120 см, Глубина 87 см',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 2,
    title: 'КРЕСЛО 2',
    img: '/img/pagesecond/kreslo/kreslo2.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 3,
    title: 'КРЕСЛО 3',
    img: '/img/pagesecond/kreslo/kreslo3.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 4,
    title: 'КРЕСЛО 4',
    img: '/img/pagesecond/kreslo/kreslo4.png',
    description: 'Вращающееся сиденье, регулируемое по высоте. Каркас из мультиплекса. Наполнитель из пенополиуретана.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Ширина: 62 см, Высота: 71-80 см, Глубина: 63 см',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 5,
    title: 'КРЕСЛО 5',
    img: '/img/pagesecond/kreslo/kreslo5.png',
    description: 'Материал: Ткань, Металл, Пластик. Ножка из металла с эпоксидным покрытием.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Длина 68.5 см, Ширина 68.5 см, Высота 104.5-115.5 см',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 6,
    title: 'КРЕСЛО 6',
    img: '/img/pagesecond/kreslo/kreslo6.png',
    description: 'Материал спинки: сетка. Материал сиденья: ткань, сетка. Механизм качания: мультиблок.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Высота кресла 105-116 см, Высота опоры 45 см',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 7,
    title: 'КРЕСЛО 7',
    img: '/img/pagesecond/kreslo/kreslo7.png',
    description: 'Крестовина и подлокотники — хром. Обивка: экокожа. Максимальная нагрузка: 120 кг.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Высота 106 см, Ширина 42 см, Глубина 46 см',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 8,
    title: 'КРЕСЛО 8',
    img: '/img/pagesecond/kreslo/kreslo8.png',
    description: 'Комфортное кресло с регулировкой и мягкой обивкой, созданное для работы и отдыха с удобной посадкой.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '900x850x450',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 9,
    title: 'КРЕСЛО 9',
    img: '/img/pagesecond/kreslo/kreslo9.png',
    description: 'Удобное кресло с износостойкой обивкой и устойчивой конструкцией, подходящее для длительного использования.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '900x850x450',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый', hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
]

export default function Kreslo() {
  return (
    <ProductList
      products={products}
      title="Кресла"
      backPath="/secondpage"
      backLabel="Мебель"
    />
  )
}