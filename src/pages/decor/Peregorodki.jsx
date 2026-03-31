import { Link } from 'react-router-dom'
import './Peregorodki.css'

const products = [
  {
    id: 1,
    title: 'СТЕКЛО',
    img: ['/img/pagedecor/peregorodki/item1.png'],
    description: 'Стеклянные перегородки делают пространство визуально лёгким и просторным. Они пропускают свет, не загромождая комнату. Идеально подходят для зонирования офисов, гостиных, кухонь или ванных комнат.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'РЕЙКИ',
    img: ['/img/pagedecor/peregorodki/item2.png'],
    description: 'Реечные перегородки из деревянных или пластиковых реек создают ритм и текстуру в интерьере. Отлично смотрятся в стиле лофт, скандинавском или минимализм.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'МЕТАЛЛ',
    img: ['/img/pagedecor/peregorodki/item31.png', '/img/pagedecor/peregorodki/item32.png'],
    description: 'Металлические перегородки — для современных интерьеров. Прочные, долговечные, с индустриальным характером. Подходят для офисов, лофтов, студий и технических помещений.',
    article: 'S.Me-ST.S.DP',
  },
]

const telegramBase = 'https://t.me/stem_academia_bot?text='

export default function Peregorodki() {
  return (
    <div className="peregorodki-page">

      <div className="peregorodki-breadcrumb">
        <Link to="/" className="breadcrumb-link">Главная</Link>
        <span> / </span>
        <Link to="/decor" className="breadcrumb-link">Декор</Link>
        <span> / </span>
        <span>Перегородки</span>
      </div>

      <h1 className="peregorodki-title">
        Перегородки <span>{products.length} товара</span>
      </h1>

      <div className="peregorodki-list">
        {products.map((p) => (
          <div key={p.id} className="divan-card">

            <div className="divan-card__gallery">
              {p.img.length > 1 ? (
                <div className="perego-multi-img">
                  {p.img.map((src, i) => (
                    <img key={i} src={src} alt={p.title} className="perego-img-item" />
                  ))}
                </div>
              ) : (
                <img src={p.img[0]} alt={p.title} className="divan-card__main-img" />
              )}
            </div>

            <div className="divan-card__info">
              <h2 className="divan-card__title">{p.title}</h2>

              <div className="divan-card__section">
                <span className="divan-card__label">Описание:</span>
                <p className="divan-card__desc">{p.description}</p>
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