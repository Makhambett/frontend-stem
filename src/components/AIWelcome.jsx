import { useState, useEffect } from 'react'
import './AIWelcome.css'

export default function AIWelcome({ onClose }) {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showButtons, setShowButtons] = useState(false)

  // Текст приветствия от компании (можно менять)
  const introText = `👋 Здравствуйте! Я — виртуальный помощник STEM Academia.

Мы помогаем школам, университетам и офисам Казахстана оснащать пространства качественной мебелью и оборудованием.

🪑 Что у нас есть:
• Парты, стулья, диваны, шкафы
• Лабораторное оборудование
• Интерактивные панели и 3D-декор

🚚 Доставка по всему Казахстану
📍 Самовывоз: Астана, Алматы

Чем могу помочь?`

  // Эффект "печатания" текста
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setMessage(introText.slice(0, i))
      i++
      if (i > introText.length) {
        clearInterval(timer)
        setIsTyping(false)
        setTimeout(() => setShowButtons(true), 400)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [])

  // Быстрые действия
  const quickActions = [
    { label: '🪑 Подобрать мебель', action: () => window.location.href = '/secondpage' },
    { label: '🚚 Условия доставки', action: () => alert('Доставка по всему Казахстану. Стоимость рассчитывается индивидуально.') },
    { label: '💬 Написать менеджеру', action: () => window.open('https://wa.me/77000395877', '_blank') },
  ]

  return (
    <div className="ai-welcome-overlay" onClick={onClose}>
      <div className="ai-welcome-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Заголовок */}
        <div className="ai-welcome-header">
          <div className="ai-avatar">🤖</div>
          <div>
            <h4>AI-помощник STEM</h4>
            <span className="ai-status">онлайн</span>
          </div>
          <button className="ai-close" onClick={onClose} title="Закрыть">×</button>
        </div>

        {/* Сообщение */}
        <div className="ai-welcome-message">
          <p className="ai-text">{message}</p>
          {isTyping && <span className="ai-typing">▍</span>}
        </div>

        {/* Кнопки действий */}
        {showButtons && (
          <div className="ai-quick-actions">
            {quickActions.map((btn, i) => (
              <button key={i} className="ai-action-btn" onClick={btn.action}>
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Подвал */}
        <div className="ai-welcome-footer">
          <small>💡 Подсказка: Вы можете закрыть это окно и открыть помощника позже через кнопку в углу</small>
        </div>

      </div>
    </div>
  )
}