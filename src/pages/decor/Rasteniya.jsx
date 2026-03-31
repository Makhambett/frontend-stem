import ProductList from '../../components/ProductList'
import './Rasteniya.css'

const products = [
  {
    id: 1,
    title: 'ДЕРЕВО',
    img: '/img/pagedecor/rasteniya/item1.png',
    description: 'Деревянные растения — это стильное и функциональное решение для оформления интерьера. Они добавляют уюта и тепла в комнату, создавая ощущение связи с природой. Идеально подходят для гостиных, спален и офисов.',
    material: ['Металл', 'Гипс', 'Пластик'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Черный', hex: '#222222' },
      { name: 'Бежевый', hex: '#C8B89A' },
    ],
    article: 'L.DE-Ras.Der',
  },
  {
    id: 2,
    title: 'КОМАНДНЫЕ РАСТЕНИЯ',
    img: '/img/pagedecor/rasteniya/item2.png',
    description: 'Командные растения — это идеальное решение для оформления интерьера. Они добавляют живости и цвета в комнату, создавая ощущение связи с природой. Идеально подходят для гостиных, спален и офисов.',
    material: ['Натуральные материалы'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Черный', hex: '#222222' },
      { name: 'Бежевый', hex: '#C8B89A' },
      { name: 'Серый', hex: '#AAAAAA' },
    ],
    article: 'L.DE-Ras.KomRas',
  },
  {
    id: 3,
    title: 'РАСТИТЕЛЬНОСТЬ НА СТЕНЕ',
    img: '/img/pagedecor/rasteniya/item3.png',
    description: 'Растительность на стене — это современное решение для оформления интерьера. Она добавляет живости и цвета в комнату, создавая ощущение связи с природой.',
    material: ['Мох', 'Натуральные материалы'],
    size: 'По размеру стены',
    colors: [
      { name: 'Зелёный', hex: '#2d6a4f' },
      { name: 'Светло-зелёный', hex: '#74c69d' },
    ],
    article: 'L.DE-Ras.Moh',
  },
]

export default function Rasteniya() {
  return (
    <ProductList
      products={products}
      title="Растения"
      backPath="/decor"
      backLabel="Декор"
    />
  )
}