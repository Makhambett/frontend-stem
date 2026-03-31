import './Computers.css'

const computers = [
  {
    id: 1,
    type: 'МОНОБЛОК',
    brand: 'AVTECH PRO',
    description: 'Компактный и производительный моноблок AVTECH PRO — готовое решение для работы, учёбы или дома. Всё необходимое уже в комплекте: проводная мышь и клавиатура. Не нужно покупать ничего дополнительно — подключил и работай. Отличное качество сборки, чёткое изображение, тихая работа. Подойдёт для офиса, кабинета или детской комнаты.',
    included: 'мышь проводная Avtech Pro MS581, клавиатура проводная Avtech Pro KB819, кабель питания',
    img: '/img/pagethird/computers/item1.png',
    specs: [
      { icon: '🖥', label: 'Серия процессора', value: 'Intel Core i3 10100', bold: true },
      { icon: '⊞', label: 'Разрешение дисплея', value: 'FullHD', bold: true },
      { icon: '💾', label: 'Объём оперативной памяти', value: '8Gb', bold: true },
      { icon: '📷', label: 'Встроенная веб-камера', value: '720p', bold: true },
      { icon: '💿', label: 'Тип накопителя', value: 'HDD+SSD', bold: true },
      { icon: '⊞', label: 'Операционная система', value: 'Windows 10 pro', bold: true },
      { icon: '📐', label: 'Диагональ, дюйм', value: '23.8', bold: true },
      { icon: '🔧', label: 'Тип оперативной памяти', value: 'DDR4', bold: true },
    ],
    article: 'S.Ee-PC.MB.AVT.Pro',
  },
  {
    id: 2,
    type: 'НОУТБУК',
    brand: 'AVTECH PRO',
    description: 'Надёжный ноутбук AVTECH PRO для повседневных задач. Удобно брать с собой на учёбу, в офис или в поездки. Лёгкий, компактный, при этом достаточно мощный для работы с документами, интернетом и мультимедиа. На корпусе есть все необходимые разъёмы: HDMI для подключения внешнего монитора, быстрые USB-порты, современный USB Type-C и разъём для гарнитуры',
    ports: 'HDMI, USB 3.2 Gen 1 Type-A, 1 x USB Type-C, Разъем для гарнитуры',
    img: '/img/pagethird/computers/item2.png',
    specs: [
      { icon: '🖥', label: 'Серия процессора', value: 'Intel Core i3 10100', bold: true },
      { icon: '⊞', label: 'Разрешение дисплея', value: 'FullHD', bold: true },
      { icon: '💾', label: 'Объём оперативной памяти', value: '8Gb', bold: true },
      { icon: '📷', label: 'Встроенная веб-камера', value: '720p', bold: true },
      { icon: '💿', label: 'Тип накопителя', value: 'SSD', bold: true },
      { icon: '⊞', label: 'Операционная система', value: 'Windows 11 pro', bold: true },
      { icon: '📐', label: 'Диагональ, дюйм', value: '14.0', bold: true },
      { icon: '🖥', label: 'Тип матрицы экрана', value: 'IPS', bold: true },
    ],
    article: 'S.Ee-PC.NB.AVT.Pro',
  },
]

export default function Computers() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | КОМПЬЮТЕРЫ</div>

      <main className="computers-layout">
        {computers.map((c) => (
          <div key={c.id} className="computer-card">

            {/* Заголовок + картинка */}
            <div className="computer-card__top">
              <div className="computer-card__top-left">
                <h2 className="computer-card__type">{c.type}</h2>
                <p className="computer-card__brand">{c.brand}</p>
                <p className="computer-card__desc">{c.description}</p>
                {c.included && (
                  <p className="computer-card__included">
                    <strong>В комплекте:</strong> {c.included}
                  </p>
                )}
                {c.ports && (
                  <p className="computer-card__included">
                    <strong>Разъёмы на корпусе:</strong> {c.ports}
                  </p>
                )}
              </div>
              <div className="computer-card__img-wrap">
                <img src={c.img} alt={c.type} className="computer-card__img" />
              </div>
            </div>

            {/* Характеристики */}
            <div className="computer-card__specs-section">
              <h3 className="computer-card__specs-title">Характеристики</h3>
              <div className="computer-card__specs">
                {c.specs.map((s, i) => (
                  <div key={i} className="comp-spec">
                    <div className="comp-spec__icon">{s.icon}</div>
                    <div className="comp-spec__label">{s.label}</div>
                    <div className="comp-spec__value">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="computer-card__article">Артикул: {c.article}</p>
          </div>
        ))}
      </main>
    </div>
  )
}