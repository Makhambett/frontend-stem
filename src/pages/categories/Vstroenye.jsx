import ProductList from '../../components/ProductList'
import './Category.css'

const products = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: `ВСТРОЕННЫЙ ШКАФ ${i + 1}`,
  img: `/img/pagesecond/shkafy/vstroenye/shkaf${i + 1}.png`,
  description: 'Компактная модель для небольших помещений. Идеально подходит для прихожей, спальни или коридора. Внутреннее пространство организовано удобно - есть отделения для одежды, обуви и аксессуаров.',
  material: ['ДСП', 'МДФ', 'Фурнитура металлическая', 'Зеркальные вставки'],
  size: '2000x600x2400',
  colors: [
    { name: 'Белый', hex: '#FFFFFF' },
    { name: 'Венге', hex: '#3B1F0A' },
    { name: 'Дуб сонома', hex: '#C8A97E' },
    { name: 'Серый', hex: '#888888' },
  ],
  article: `L.Me-VS.UN.${200 + i}`,
}))

export default function Vstroenye() {
  return (
    <ProductList
      products={products}
      title="Встроенные шкафы"
      backPath="/secondpage/shkafy"
      backLabel="Шкафы"
    />
  )
}