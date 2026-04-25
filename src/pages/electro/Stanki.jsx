import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createApplication } from '../../api/api'
import { useCart } from '../../context/CartContext'  // ✅ Добавляем хук корзины
import './Stanki.css'

const products = [
  {
    id: 1,
    tag: 'The cool tool',
    title: 'UNIMAT ML 160200',
    img: '/img/pagethird/stanki/item1.png',
    description: [
      'Unimat — это многофункциональный учебно-лабораторный станок, предназначенный для изучения основ обработки материалов, инженерии и технологий. Станок позволяет учащимся и студентам выполнять практические задания, развивать навыки работы с металлом и пластиком, а также создавать учебные проекты в безопасной учебной среде.',
    ],
    article: 'S.Me-ST.S.DP',
    price: 125000,  // ✅ Добавляем цену
  },
  {
    id: 2,
    tag: 'The cool tool',
    title: 'UNIMAT 1 BASIC 4B1',
    img: '/img/pagethird/stanki/item2.png',
    description: [
      'Unimat по дереву — это многофункциональный учебно-лабораторный станок, предназначенный для изучения основ обработки древесины, инженерии и технологий. Станок позволяет учащимся и студентам выполнять практические задания, развивать навыки работы с древесными материалами.',
    ],
    article: 'S.Me-ST.S.DP',
    price: 98000,  // ✅ Добавляем цену
  },
  {
    id: 3,
    tag: 'The cool tool',
    title: 'NAME_TEXT',
    img: '/img/pagethird/stanki/item3.png',
    description: [
      'Учебный станок для освоения базовых технологий обработки материалов и моделирования, оптимизированный для практических занятий.',
      'Оснащён безопасными механизмами и позволяет изучать точность обработки, сборку прототипов и конструирование изделий.',
    ],
    article: 'S.Me-ST.S.DP',
    price: 156000,  // ✅ Добавляем цену
  },
]

export default function Stanki() {
  const { addToCart } = useCart()  // ✅ Получаем функцию добавления в корзину
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '', productName: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleOpenModal = (productName) => {
    setShowModal(true)
    setSubmitSuccess(false)
    setFormData({ name: '', phone: '', comment: '', productName })
  }

  const handleCloseModal = () => setShowModal(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ Функция добавления в корзину
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      article: product.article,
      img: product.img,
      name: product.title,  // Для совместимости с корзиной
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      const applicationData = {
        name: formData.name,
        phone: formData.phone,
        comment: formData.comment,
        product_name: formData.productName,
        article: '',
        product_url: window.location.href
      }
      
      await createApplication(applicationData)
      setSubmitSuccess(true)
      setTimeout(() => setShowModal(false), 2000)
    } catch (err) {
      console.error('Ошибка отправки заявки:', err)
      if (err.response?.status === 400) {
        alert('❌ Проверьте правильность заполнения формы')
      } else if (err.response?.status === 500) {
        alert('⚠️ Сервер временно недоступен. Попробуйте позже')
      } else {
        alert('❌ Не удалось отправить заявку. Проверьте соединение')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="third-page-container">
        <nav className="third-page-breadcrumb">
          <Link to="/">Главная</Link>
          <span className="separator"> / </span>
          <Link to="/electro">Электротехника</Link>
          <span className="separator"> / </span>
          <span className="current">Станки</span>
        </nav>

        <h1>Станки <span className="product-count">{products.length} товара</span></h1>

        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="product-info">
              <p className="product-tag">{p.tag}</p>
              <h2 className="product-title">{p.title}</h2>

              <div className="product-description">
                <p>Описание:</p>
                {p.description.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>

              <div className="product-article">
                <table>
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{p.article}</td>
                    </tr>
                    <tr>
                      <td>Цена</td>
                      <td>{p.price.toLocaleString('ru-KZ')} ₸</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="product-delivery">
                <p>🚚 Доставка по Казахстану</p>
                <p>📍 Самовывоз: г. Астана, ул. Домалак-ана 26</p>
              </div>

              <div className="product-actions">
                <button 
                  className="btn-cart"
                  onClick={() => handleAddToCart(p)}
                >
                  🛒 В корзину
                </button>
                
                <button 
                  className="btn-application"
                  onClick={() => handleOpenModal(p.title)}
                >
                  📝 Оставить заявку
                </button>
                
                <button className="btn-favorite">
                  ❤ В избранное
                </button>
              </div>

              <div className="product-meta">
                <span>↗ Поделиться</span>
                <span>⚖ Сравнить</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>

            <h2 className="modal-title">📝 Оставить заявку</h2>
            <p className="modal-subtitle">
              Товар: <strong>{formData.productName}</strong>
            </p>

            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Заявка отправлена!</h3>
                <p>Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-group">
                  <label htmlFor="name">Ваше имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Иван Иванов"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Комментарий</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Дополнительная информация (необязательно)"
                    rows="3"
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? '⏳ Отправка...' : '📤 Отправить заявку'}
                </button>

                <p className="form-note">
                  🔒 Ваши данные защищены. Мы не передаём их третьим лицам.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}