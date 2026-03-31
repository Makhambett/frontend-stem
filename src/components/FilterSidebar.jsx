import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './FilterSidebar.css'

const MATERIALS = ['Дерево', 'Металл', 'Пластик', 'Стекло', 'Ткань']

export default function FilterSidebar({ onFilter }) {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [inStock, setInStock] = useState(false)
  const [materials, setMaterials] = useState([])
  const { t } = useLang()

  function toggleMaterial(mat) {
    if (materials.includes(mat)) {
      setMaterials(materials.filter((m) => m !== mat))
    } else {
      setMaterials([...materials, mat])
    }
  }

  function handleApply() {
    if (onFilter) onFilter({ priceFrom, priceTo, inStock, materials })
  }

  function handleReset() {
    setPriceFrom('')
    setPriceTo('')
    setInStock(false)
    setMaterials([])
    if (onFilter) onFilter({ priceFrom: '', priceTo: '', inStock: false, materials: [] })
  }

  return (
    <aside className="filter-sidebar">

      <div className="filter-header">
        <span>{t.filters}</span>
        <button className="filter-reset" onClick={handleReset}>{t.reset}</button>
      </div>

      <div className="filter-block">
        <h4 className="filter-block__title">{t.price}</h4>
        <div className="filter-price-inputs">
          <input
            type="number"
            placeholder="От"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <span>—</span>
          <input
            type="number"
            placeholder="До"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
        <div className="filter-price-ranges">
          <button onClick={() => { setPriceFrom(''); setPriceTo('500000') }}>до 500 000</button>
          <button onClick={() => { setPriceFrom('500000'); setPriceTo('1500000') }}>500 000 — 1 500 000</button>
          <button onClick={() => { setPriceFrom('1500000'); setPriceTo('') }}>от 1 500 000</button>
        </div>
      </div>

      <div className="filter-block">
        <h4 className="filter-block__title">{t.material}</h4>
        <div className="filter-checkboxes">
          {MATERIALS.map((mat) => (
            <label key={mat} className="filter-checkbox">
              <input
                type="checkbox"
                checked={materials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              <span>{mat}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-block">
        <h4 className="filter-block__title">{t.availability}</h4>
        <label className="filter-toggle">
          <span>{t.in_stock}</span>
          <div
            className={inStock ? 'toggle-switch active' : 'toggle-switch'}
            onClick={() => setInStock(!inStock)}
          >
            <div className="toggle-thumb" />
          </div>
        </label>
      </div>

      <button className="filter-apply" onClick={handleApply}>
        {t.apply}
      </button>

    </aside>
  )
}