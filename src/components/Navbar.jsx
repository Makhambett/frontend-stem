import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const { lang, setLang, t } = useLang()

  const categories = [
    { label: t.nav_design,    path: '/' },
    { label: t.nav_furniture, path: '/secondpage' },
    { label: t.nav_electro,   path: '/electro' },
    { label: t.nav_decor,     path: '/decor' },
    { label: t.nav_equipment, path: '/equipment' },
    { label: t.nav_digital,   path: '/digital' },
    { label: t.nav_contacts,  path: '/contacts' },
  ]

  function handleSearch(e) {
    e.preventDefault()
  }

  return (
    <header className="navbar-wrapper">

      {/* TOP BAR */}
      <div className="navbar-topbar">
        <span className="topbar-city">📍 {t.city}</span>
        <Link to="/contacts" className="topbar-link">{t.stores}</Link>
        <div className="topbar-right">
          <span className="topbar-phone">📞 {t.phone}</span>
          <span
            className={`topbar-lang ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => setLang('ru')}
          >
            Рус
          </span>
          <span
            className={`topbar-lang ${lang === 'kz' ? 'active' : ''}`}
            onClick={() => setLang('kz')}
          >
            Қаз
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo">
          <span className="logo-stem">STEM</span>
          <span className="logo-academia">Academia</span>
        </Link>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="navbar-icons">
          <button className="nav-icon-btn" title={t.favorite}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{t.favorite}</span>
          </button>

          <button className="nav-icon-btn" title={t.compare}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            <span>{t.compare}</span>
          </button>

          <a
            href="https://t.me/stem_academia_bot"
            target="_blank"
            rel="noreferrer"
            className="nav-icon-btn nav-telegram"
            title="Telegram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.857l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.443c.533-.194 1.003.131.679.706z"/>
            </svg>
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <nav className="navbar-categories">
        {categories.map((cat) => (
          <Link key={cat.path} to={cat.path} className="cat-link">
            {cat.label}
          </Link>
        ))}
      </nav>

    </header>
  )
}