import ProductList from '../../components/ProductList'
import './Category.css'

const products = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: `СТАНДАРТНЫЙ ШКАФ ${i + 1}`,
  img: `/img/pagesecond/shkafy/standartnye/shkaf${i + 1}.png`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
  material: ['ДСП', 'МДФ', 'Фурнитура металлическая', 'Зеркальные вставки'],
  size: '1800x600x2200',
  colors: [
    { name: 'Белый', hex: '#FFFFFF' },
    { name: 'Венге', hex: '#3B1F0A' },
    { name: 'Дуб сонома', hex: '#C8A97E' },
    { name: 'Серый', hex: '#888888' },
  ],
  article: `L.Me-SN.UN.${180 + i}`,
}))

export default function Standartnye() {
  return (
    <ProductList
      products={products}
      title="Стандартные шкафы"
      backPath="/secondpage/shkafy"
      backLabel="Шкафы"
    />
  )
}