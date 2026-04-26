import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { getProducts, getImageUrl } from '../api/api'
import { useLang } from '../i18n/LanguageContext'
import './SearchPage.css'


const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const productLink = product.path || product.url || `/product/${product.slug || product.id}`

  return (
    <Link
      ref={ref}
      to={productLink}
      className={`search-card ${inView ? 'search-card--visible' : ''}`}
      aria-label={`Перейти к товару: ${product.title}`}
      role="listitem"
    >
      <div className="search-card__media">
        <img
          src={getImageUrl(product.img)}
          loading="lazy"
          decoding="async"
          alt={`Купить ${product.title?.toLowerCase()} в STEM Academia`}
          className="search-card__img"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/img/placeholder.png'
          }}
        />
        {product.badge && (
          <span className={`badge badge--${product.badge}`}>
            {product.badge === 'new' ? 'NEW' : 'SALE'}
          </span>
        )}
      </div>

      <div className="search-card__info">
        <h3 className="search-card__title">{product.title}</h3>
        {product.article && (
          <p className="search-card__article">Арт: {product.article}</p>
        )}
        {product.description && (
          <p className="search-card__desc">{product.description}</p>
        )}
        {product.price && (
          <div className="search-card__price">
            {product.old_price && (
              <span className="search-card__old-price">
                {Number(product.old_price).toLocaleString('ru-RU')} ₸
              </span>
            )}
            <span className="search-card__current-price">
              {Number(product.price).toLocaleString('ru-RU')} ₸
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}


export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { t } = useLang()

  useEffect(() => {
    if (!query) {
      setLoading(false)
      setResults([])
      return
    }

    setLoading(true)
    setError(null)

    getProducts({ q: query })
      .then(data => {
        setResults(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Ошибка поиска:', err)
        setError('Не удалось загрузить результаты. Попробуйте позже.')
        setLoading(false)
      })
  }, [query])

  // JSON-LD schema
  useEffect(() => {
    if (!query || results.length === 0) return

    const schema = {
      "@context": "https://schema.org",
      "@type": "SearchResultsPage",
      "name": `Результаты поиска: ${query}`,
      "description": `Найдено ${results.length} товаров по запросу "${query}" в STEM Academia.`,
      "mainEntity": results.map(p => ({
        "@type": "Product",
        "name": p.title,
        "image": getImageUrl(p.img),
        "sku": p.article,
        "url": `${window.location.origin}${p.path || `/product/${p.id}`}`
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [query, results])

  return (
    <div className="search-page">
      <nav className="search-breadcrumb" aria-label="Breadcrumb">
        <Link to="/" className="breadcrumb-link">{t?.home || 'Главная'}</Link>
        <span className="separator" aria-hidden="true"> / </span>
        <span className="current">Поиск: "{query}"</span>
      </nav>

      <h1 className="search-title">
        Результаты поиска: <span>"{query}"</span>
      </h1>

      {loading && (
        <div className="search-loading" aria-live="polite">
          <div className="search-skeleton">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton skeleton-image" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text skeleton-text--short" />
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="search-error" role="alert">
          <p>⚠️ {error}</p>
          <Link to="/" className="btn-back">← Вернуться на главную</Link>
        </div>
      )}

      {!loading && !error && !query && (
        <div className="search-empty">
          <p>Введите запрос в строку поиска</p>
          <Link to="/" className="btn-back">← На главную</Link>
        </div>
      )}

      {!loading && !error && query && results.length === 0 && (
        <div className="search-empty">
          <p>😔 Ничего не найдено по запросу "{query}"</p>
          <Link to="/" className="btn-back">← Вернуться на главную</Link>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <>
          <p className="search-count">
            🔍 Найдено: <strong>{results.length}</strong>{' '}
            {results.length === 1 ? 'товар' : results.length < 5 ? 'товара' : 'товаров'}
          </p>
          <div className="search-grid" role="list">
            {results.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}