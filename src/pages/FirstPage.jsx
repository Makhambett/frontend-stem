import './FirstPage.css'
import TelegramButton from '../components/TelegramButton'
import HeroSlider from '../components/HeroSlider'
import CategoryGrid from '../components/CategoryGrid'
import { useLang } from '../i18n/LanguageContext'

export default function FirstPage() {
  const { t } = useLang()
  return (
    <div className="page">
      <HeroSlider />
      <CategoryGrid />
      <div className="breadcrumb">{t.design_breadcrumb}</div>
      <main className="packages">
        <div className="package package--s">
          <div className="package__content">
            <h2 className="package__title">{t.pkg_s_title}</h2>
            <p className="package__desc">{t.pkg_s_desc}</p>
            <ul className="package__list">
              {t.pkg_s_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <img src="/img/pagefirst/Слой1.png" alt="Стул" className="package__img" />
          <div className="package__price">{t.pkg_s_price}</div>
        </div>
        <div className="package package--m">
          <div className="package__content">
            <h2 className="package__title">{t.pkg_m_title}</h2>
            <p className="package__desc">{t.pkg_m_desc}</p>
            <ul className="package__list">
              {t.pkg_m_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <img src="/img/pagefirst/plant.png" alt="Растение" className="package__img" />
          <div className="package__price">{t.pkg_m_price}</div>
        </div>
        <div className="package package--l">
          <div className="package__content">
            <h2 className="package__title">{t.pkg_l_title}</h2>
            <p className="package__desc">{t.pkg_l_desc}</p>
            <ul className="package__list">
              {t.pkg_l_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <img src="/img/pagefirst/F5.png" alt="Кресло" className="package__img" />
          <div className="package__price">{t.pkg_l_price}</div>
        </div>
      </main>
      <section className="dream">
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tm" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--bl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--br" />
        <div className="dream__left">
          <h2 className="dream__title">{t.dream_title}</h2>
          <p className="dream__desc">{t.dream_desc}</p>
          <a href="#" className="dream__btn">{t.dream_btn}</a>
          <div style={{ marginTop: '16px' }}>
            <TelegramButton />
          </div>
        </div>
        <div className="dream__right">
          <img src="/img/pagefirst/room.png" alt="Комната" className="dream__room" />
        </div>
      </section>
    </div>
  )
}