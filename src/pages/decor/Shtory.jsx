import { Link } from 'react-router-dom'
import './Shtory.css'

const products = [
  {
    id: 1,
    title: 'РУЛОННЫЕ',
    img: '/img/pagedecor/shtory/item1.png',
    description: 'Рулонные шторы — это классическое решение для оформления окон. Они легко монтируются, удобны в эксплуатации и обеспечивают хорошую светоизоляцию. Идеально подходят для гостиных, спален и детских комнат.',
    material: ['Ткань', 'Синтетика'],
    size: 'По размеру окна',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Серый', hex: '#888888' },
      { name: 'Тёмный', hex: '#333333' },
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'ЖАЛЮЗИ',
    img: '/img/pagedecor/shtory/item2.png',
    description: 'Жалюзи — это стильное и функциональное решение для оформления окон. Они позволяют регулировать уровень освещения и обеспечивают хорошую вентиляцию. Идеально подходят для гостиных, спален и офисов.',
    material: ['Пластик', 'Алюминий'],
    size: 'По размеру окна',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Серый', hex: '#888888' },
      { name: 'Тёмный', hex: '#333333' },
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'ТКАНЕВЫЕ',
    img: '/img/pagedecor/shtory/item3.png',
    description: 'Тканевые шторы — это уютное и элегантное решение для оформления окон. Они обеспечивают хорошую звукоизоляцию и могут быть выполнены в различных дизайнерских решениях.',
    material: ['Ткань', 'Лён', 'Хлопок'],
    size: 'По размеру окна',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Бежевый', hex: '#F5DEB3' },
      { name: 'Серый', hex: '#888888' },
      { name: 'Тёмный', hex: '#333333' },
    ],
    article: 'S.Me-ST.S.DP',
  },
]

import ProductList from '../../components/ProductList'

export default function Shtory() {
  return (
    <ProductList
      products={products}
      title="Шторы"
      backPath="/decor"
      backLabel="Декор"
    />
  )
}