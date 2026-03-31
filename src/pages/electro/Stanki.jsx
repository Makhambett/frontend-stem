import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Stanki.css'

const products = [
  {
    id: 1,
    tag: 'The cool tool',
    title: 'UNIMAT ML 160200',
    img: '/img/pagethird/stanki/item1.png',
    description: [
      'Unimat — это многофункциональный учебно-лабораторный станок, предназначенный для изучения основ обработки материалов, инженерии и технологий. Станок позволяет учащимся и студентам выполнять практические задания, развивать навыки работы с металлом и пластиком, а также создавать учебные проекты в безопасной учебной среде.',
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    tag: 'The cool tool',
    title: 'UNIMAT 1 BASIC 4B1',
    img: '/img/pagethird/stanki/item2.png',
    description: [
      'Unimat по дереву — это многофункциональный учебно-лабораторный станок, предназначенный для изучения основ обработки древесины, инженерии и технологий. Станок позволяет учащимся и студентам выполнять практические задания, развивать навыки работы с древесными материалами.',
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    tag: 'The cool tool',
    title: 'NAME_TEXT',
    img: '/img/pagethird/stanki/item3.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante.',
    ],
    article: 'S.Me-ST.S.DP',
  },
]

export default function Stanki() {
  const telegramBase = 'https://t.me/stem_academia_bot?text='

  return (
    <div className="stanki-page">

      <div className="stanki-breadcrumb">
        <Link to="/" className="breadcrumb-link">Главная</Link>
        <span> / </span>
        <Link to="/electro" className="breadcrumb-link">Электротехника</Link>
        <span> / </span>
        <span>Станки</span>
      </div>

      <h1 className="stanki-title">
        Станки <span>{products.length} товара</span>
      </h1>

      <div className="stanki-list">
        {products.map((p) => (
          <div key={p.id} className="divan-card">

            <div className="divan-card__gallery">
              <img src={p.img} alt={p.title} className="divan-card__main-img" />
            </div>

            <div className="divan-card__info">
              <p className="stanki-tag">{p.tag}</p>
              <h2 className="divan-card__title">{p.title}</h2>

              <div className="divan-card__section">
                <span className="divan-card__label">Описание:</span>
                {p.description.map((d, i) => (
                  <p key={i} className="divan-card__desc">{d}</p>
                ))}
              </div>

              <div className="divan-card__section">
                <table className="divan-card__table">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{p.article}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="divan-card__delivery">
                <span>🚚 Доставка по Казахстану</span>
                <span>📍 Самовывоз: г. Астана, ул. Домалак-ана 26</span>
              </div>

              <div className="divan-card__actions">
                <a
                  href={`${telegramBase}${encodeURIComponent(`Здравствуйте! Интересует: ${p.title}, Артикул: ${p.article}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-order"
                >
                  Оставить заявку
                </a>
                <button className="btn-favorite">❤ В избранное</button>
              </div>

              <div className="divan-card__share">
                <button>↗ Поделиться</button>
                <button>⚖ Сравнить</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}