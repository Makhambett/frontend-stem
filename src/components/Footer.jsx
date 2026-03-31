import { Link } from 'react-router-dom'
import TelegramButton from './TelegramButton'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* КОЛОНКА 1 — Бренд */}
        <div className="footer-col footer-col--brand">
          <div className="footer-logo">
            <span className="footer-logo-stem">STEM</span>
            <span className="footer-logo-academia">Academia</span>
          </div>
          <p className="footer-tagline">
            Мебель и оборудование для образовательных пространств Казахстана
          </p>
          <div className="footer-socials">
            <a href="#" title="Instagram">IG</a>
            <a href="#" title="YouTube">YT</a>
            <a href="#" title="WhatsApp">WA</a>
            <a href="https://t.me/stem_academia_bot" target="_blank" rel="noreferrer" title="Telegram">TG</a>
          </div>
          <div className="footer-tg">
            <p>Остались вопросы?</p>
            <TelegramButton />
          </div>
        </div>

        {/* КОЛОНКА 2 — Каталог */}
        <div className="footer-col">
          <h4 className="footer-col__title">Каталог</h4>
          <ul className="footer-col__list">
            <li><Link to="/">Дизайн интерьера</Link></li>
            <li><Link to="/secondpage">Мебель</Link></li>
            <li><Link to="/electro">Электротехника</Link></li>
            <li><Link to="/decor">Декор</Link></li>
            <li><Link to="/equipment">Оборудование</Link></li>
            <li><Link to="/digital">Цифровые продукты</Link></li>
          </ul>
        </div>

        {/* КОЛОНКА 3 — Компания */}
        <div className="footer-col">
          <h4 className="footer-col__title">Компания</h4>
          <ul className="footer-col__list">
            <li><Link to="/contacts">О нас</Link></li>
            <li><Link to="/contacts">Наши проекты</Link></li>
            <li><Link to="/contacts">Партнёрам</Link></li>
            <li><Link to="/contacts">Вакансии</Link></li>
          </ul>
        </div>

        {/* КОЛОНКА 4 — Контакты */}
        <div className="footer-col">
          <h4 className="footer-col__title">Контакты</h4>
          <ul className="footer-col__list footer-col__list--contacts">
            <li>📍 г. Астана, ул. Домалак-ана 26</li>
            <li>📞 <a href="tel:+77000000000">+7 (700) 000-00-00</a></li>
            <li>✉ <a href="mailto:info@stemacademia.kz">info@stemacademia.kz</a></li>
            <li>🕐 Пн–Пт: 9:00 – 18:00</li>
          </ul>
        </div>
      </div>

      {/* НИЖНЯЯ ПОЛОСА */}
      <div className="footer-bottom">
        <span>© 2026 STEM Academia. Все права защищены.</span>
        <div className="footer-bottom__links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
        </div>
      </div>
    </footer>
  )
}