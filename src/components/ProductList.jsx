import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(0)
  const { t } = useLang()

  const img = Array.isArray(product.imgs) ? product.imgs[0] : product.img
  const size = Array.isArray(product.size) ? product.size.join(', ') : product.size
  const material = Array.isArray(product.material) ? product.material.join(', ') : product.material

  const telegramMsg = `Здравствуйте! Хочу узнать подробнее: ${product.title}, Артикул: ${product.article}`
  const telegramLink = `https://t.me/stem_academia_bot?text=${encodeURIComponent(telegramMsg)}`

  return (
    <div className="divan-card">

      <div className="divan-card__gallery">
        <img src={img} alt={product.title} className="divan-card__main-img" />
      </div>

      <div className="divan-card__info">
        <h2 className="divan-card__title">{product.title}</h2>
        <p className="divan-card__desc">{product.description}</p>

        <div className="divan-card__section">
          <span className="divan-card__label">
            Цвет: <strong>{product.colors[activeColor].name}</strong>
          </span>
          <div className="divan-card__colors">
            {product.colors.map((c, i) => (
              <button
                key={i}
                className={i === activeColor ? 'color-dot active' : 'color-dot'}
                style={{ backgroundColor: c.hex }}
                onClick={() => setActiveColor(i)}
                title={c.name}
              />
            ))}
          </div>
        </div>

        <div className="divan-card__section">
          <span className="divan-card__label">Характеристики:</span>
          <table className="divan-card__table">
            <tbody>
              <tr>
                <td>{t.material}</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Размеры</td>
                <td>{size}</td>
              </tr>
              <tr>
                <td>Артикул</td>
                <td>{product.article}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divan-card__delivery">
          <span>🚚 {t.delivery}</span>
          <span>📍 {t.pickup}</span>
        </div>

        <div className="divan-card__actions">
          <a href={telegramLink} target="_blank" rel="noreferrer" className="btn-order">
            {t.order_btn}
          </a>
          <button className="btn-favorite">❤ {t.favorite_btn}</button>
        </div>

        <div className="divan-card__share">
          <button>↗ {t.share}</button>
          <button>⚖ {t.compare_btn}</button>
        </div>
      </div>
    </div>
  )
}

export default function ProductList({ products, title, backPath, backLabel }) {
  const { t } = useLang()

  return (
    <div className="divany-page">
      <div className="divany-breadcrumb">
        <Link to="/" className="breadcrumb-link">{t.home}</Link>
        <span> / </span>
        <Link to={backPath} className="breadcrumb-link">{backLabel}</Link>
        <span> / </span>
        <span>{title}</span>
      </div>

      <h1 className="divany-title">
        {title} <span>{products.length} товаров</span>
      </h1>

      <div className="divany-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}