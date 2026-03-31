import { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import './SecondPage.css'

const categories = [
  { title: 'ДИВАНЫ',   img: '/img/pagesecond/a1a32584672.png',   path: '/secondpage/divany' },
  { title: 'КРЕСЛО',   img: '/img/pagesecond/738d1eff.png',      path: '/secondpage/kreslo' },
  { title: 'КУХНЯ',    img: '/img/pagesecond/4a950c62bed144.jpg', path: '#' },
  { title: 'ПУФЫ',     img: '/img/pagesecond/a41bcac159.png',    path: '/secondpage/pufy' },
  { title: 'СТЕЛЛАЖИ', img: '/img/pagesecond/e0f5951d3c3.png',   path: '/secondpage/stellazhi' },
  { title: 'СТОЛЫ',    img: '/img/pagesecond/bb20aa.png',        path: '#' },
  { title: 'СТУЛЬЯ',   img: '/img/pagesecond/983793aa0.png',     path: '/secondpage/stulya' },
  { title: 'ТУМБЫ',    img: '/img/pagesecond/4d735992.png',      path: '/secondpage/tumby' },
  { title: 'ШКАФЫ',    img: '/img/pagesecond/ce38f5332a.png',    path: '/secondpage/shkafy' },
]

export default function SecondPage() {
  const [filtered, setFiltered] = useState(categories)

  function handleFilter(filters) {
    // фильтрация по наличию (пока все показываем, логику расширишь позже)
    setFiltered(categories)
  }

  return (
    <div className="second-page">

      {/* BREADCRUMB */}
      <div className="second-breadcrumb">
        <Link to="/" className="breadcrumb-link">Главная</Link>
        <span> / </span>
        <span>Мебель</span>
      </div>

      {/* LAYOUT: сайдбар + контент */}
      <div className="second-layout">

        {/* ЛЕВЫЙ ФИЛЬТР */}
        <FilterSidebar onFilter={handleFilter} />

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="second-content">

          {/* ШАПКА РАЗДЕЛА */}
          <div className="second-content__header">
            <h1 className="second-content__title">Мебель</h1>
            <span className="second-content__count">Найдено {filtered.length} категорий</span>
          </div>

          {/* СЕТКА КАТЕГОРИЙ */}
          <main className="second-grid">
            {filtered.map((cat, i) => (
              <Link key={i} to={cat.path} className="second-card">
                <img src={cat.img} alt={cat.title} className="second-card__img" />
                <span className="second-card__title">{cat.title}</span>
              </Link>
            ))}
          </main>

        </div>
      </div>
    </div>
  )
}