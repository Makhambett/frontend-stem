import ProductList from '../../components/ProductList'

const products = [
  {
    id: 'speztecher-1',
    title: 'СПЕЦ СТОЛ ДЛЯ ПРЕПОДАВАТЕЛЯ 1',
    imgs: ['/img/pagesecond/stoly/spezstolytecher/item1.png'],
    description: 'Каркас: брус, фанера, дсп. Наполнение: ППУ синтепон. Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['ЛДСП', 'МДФ', 'Металл', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Чёрный', hex: '#222222' },
      { name: 'Светлый дуб', hex: '#C8A97E' },
      { name: 'Дуб', hex: '#8B6343' },
    ],
    article: 'S.Me-STO.SPT.001',
  },
  {
    id: 'speztecher-2',
    title: 'СПЕЦ СТОЛ ДЛЯ ПРЕПОДАВАТЕЛЯ 2',
    imgs: ['/img/pagesecond/stoly/spezstolytecher/item2.png'],
    description: 'Каркас: брус, фанера, дсп. Наполнение: ППУ синтепон. Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['ЛДСП', 'МДФ', 'Металл', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Чёрный', hex: '#222222' },
      { name: 'Светлый дуб', hex: '#C8A97E' },
      { name: 'Дуб', hex: '#8B6343' },
    ],
    article: 'S.Me-STO.SPT.002',
  },
]

export default function SpezStolyTecher() {
  return (
    <ProductList
      products={products}
      title="Мебель | Столы | Спец столы для преподавателя"
      backPath="/secondpage/stoly"
      backLabel="Столы"
    />
  )
}