import { Link } from 'react-router-dom'
import './Kuxnya.css'

const features = [
  { icon: '🪵', label: 'Материалы отделки', sub: 'ЛДСП / МДФ / Дерево / Стекло / Металл' },
  { icon: '💡', label: 'Освещение' },
  { icon: '🔧', label: 'Вытяжки' },
  { icon: '💧', label: 'Фильтры для воды' },
  { icon: '📦', label: 'Микроволновые печи' },
  { icon: '❄️', label: 'Холодильники' },
  { icon: '🔥', label: 'Печи' },
  { icon: '☕', label: 'Электрочайники' },
]

export default function Kuxnya() {
  return (
    <div className="kuxnya-page">
      <div className="kuxnya-breadcrumb">
        <Link to="/">Главная</Link> / <Link to="/secondpage">Мебель</Link> / Кухня
      </div>

      <h1 className="kuxnya-heading">Мебель | Кухня</h1>

      <div className="kuxnya-layout">

        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="kuxnya-left">
          <div className="kuxnya-card">
            <h2>МЕБЕЛЬ ДЛЯ КУХНИ ПОД ВАШ ЗАКАЗ</h2>
            <p className="kuxnya-intro">
              Наша компания предлагает кухонные гарнитуры, разработанные специально для школ и других
              учебных заведений. Мы учитываем все особенности и требования к школьной мебели, обеспечивая
              максимум комфорта, безопасности и функциональности.
            </p>

            <h3>ПРЕИМУЩЕСТВА НАШИХ КУХОННЫХ ГАРНИТУРОВ:</h3>

            <ol className="kuxnya-advantages">
              <li>
                Разнообразие дизайна: мы предлагаем различные варианты стилей и цветовых решений, чтобы вы
                могли найти подходящий вариант в соответствии со своими пожеланиями заказчика.
              </li>
              <li>
                Индивидуальный подход: мы учитываем все пожелания и потребности заказчика, создавая
                уникальный кухонный гарнитур, который идеально вписается в интерьер учебного заведения.
              </li>
              <li>
                Профессиональный монтаж: наши специалисты осуществляют качественный и быстрый монтаж мебели,
                обеспечивая надёжность и долговечность конструкции. Также дополнительные материалы кухонного
                гарнитура могут варьироваться в зависимости от предпочтения заказчика.
              </li>
            </ol>

            <h3 className="kuxnya-what-title">Что мы предлагаем</h3>
            <div className="kuxnya-features">
              {features.map((f, i) => (
                <div className="kuxnya-feature" key={i}>
                  <span className="kuxnya-feature__icon">{f.icon}</span>
                  <span className="kuxnya-feature__label">{f.label}</span>
                  {f.sub && <span className="kuxnya-feature__sub">{f.sub}</span>}
                </div>
              ))}
            </div>

            <div className="kuxnya-article">Артикул: L.Me-KUHN.2500</div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — картинка */}
        <div className="kuxnya-right">
          <img
            src="/img/pagesecond/kuxnya/item1.png"
            alt="Кухонный гарнитур"
            className="kuxnya-img"
          />
        </div>

      </div>
    </div>
  )
}