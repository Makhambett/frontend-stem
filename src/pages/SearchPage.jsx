// src/pages/SearchPage.jsx
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'https://backend-stem-lpv8.onrender.com'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [query, setQuery]       = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [inStock, setInStock]   = useState(searchParams.get('in_stock') || '')

  const [products, setProducts]     = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState(null)

  // Загружаем категории один раз
  useEffect(() => {
    axios.get(`${API}/api/categories/`)
      .then(res => setCategories(res.data))
      .catch(() => {})
  }, [])

  // Поиск при изменении фильтров
  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = {}
      if (query.trim())  params.q        = query.trim()
      if (category)      params.category  = category
      if (inStock !== '') params.in_stock = inStock === 'true'

      const res = await axios.get(`${API}/api/products/`, { params })
      setProducts(res.data)
    } catch (e) {
      setError('Ошибка загрузки. Попробуйте снова.')
    } finally {
      setLoading(false)
    }
  }, [query, category, inStock])

  // Синхронизация URL с фильтрами
  useEffect(() => {
    const params = {}
    if (query.trim())   params.q        = query.trim()
    if (category)       params.category  = category
    if (inStock !== '') params.in_stock  = inStock
    setSearchParams(params, { replace: true })

    fetchProducts()
  }, [query, category, inStock])

  const handleReset = () => {
    setQuery('')
    setCategory('')
    setInStock('')
  }

  return (
    <div className="search-page">

      {/* ── ШАПКА ПОИСКА ── */}
      <div className="search-header">
        <h1>Поиск товаров</h1>

        <input
          type="text"
          placeholder="Название или артикул..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="search-input"
        />

        {/* ── ФИЛЬТРЫ ── */}
        <div className="search-filters">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Все категории</option>
            {categories.map(cat => (
              <option key={cat.slug} value={cat.slug}>
                {cat.title_ru}
              </option>
            ))}
          </select>

          <select
            value={inStock}
            onChange={e => setInStock(e.target.value)}
          >
            <option value="">Любое наличие</option>
            <option value="true">В наличии</option>
            <option value="false">Нет в наличии</option>
          </select>

          <button onClick={handleReset} className="btn-reset">
            Сбросить
          </button>
        </div>
      </div>

      {/* ── РЕЗУЛЬТАТЫ ── */}
      <div className="search-results">
        {loading && <p className="search-status">Загрузка...</p>}
        {error   && <p className="search-status error">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="search-status">Ничего не найдено</p>
        )}

        {!loading && !error && products.length > 0 && (
          <>
            <p className="search-count">Найдено: {products.length}</p>
            <div className="products-grid">
              {products.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card"
                >
                  <img
                    src={product.img || '/placeholder.jpg'}
                    alt={product.title}
                    onError={e => { e.target.src = '/placeholder.jpg' }}
                  />
                  <div className="product-card__body">
                    <h3>{product.title}</h3>
                    {product.article && (
                      <p className="product-card__article">Арт: {product.article}</p>
                    )}
                    {product.size && (
                      <p className="product-card__size">Размер: {product.size}</p>
                    )}
                    <span className={`badge ${product.in_stock ? 'badge--green' : 'badge--gray'}`}>
                      {product.in_stock ? 'В наличии' : 'Нет в наличии'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  )
}
