import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Мебель для школ',
    subtitle: 'Современные решения для образовательных пространств',
    btnText: 'Смотреть каталог',
    btnLink: '/secondpage',
    bg: '#1a4731',
    accent: '#52b788',
    img: '/img/pagefirst/room.png',
  },
  {
    id: 2,
    title: 'Arduino & LEGO',
    subtitle: 'Оборудование для STEM-лабораторий под ключ',
    btnText: 'Перейти к оборудованию',
    btnLink: '/equipment',
    bg: '#1d3557',
    accent: '#457b9d',
    img: '/img/equipment/arduino.png',   // ← заменили
  },
  {
    id: 3,
    title: 'Дизайн интерьера',
    subtitle: 'Пакеты S, M, L — готовые решения для любого бюджета',
    btnText: 'Выбрать пакет',
    btnLink: '/',
    bg: '#3d405b',
    accent: '#81b29a',
    img: '/img/pagefirst/plant.png',
  },
  {
    id: 4,
    title: 'Электротехника',
    subtitle: 'Профессиональное оборудование для учебных классов',
    btnText: 'Смотреть',
    btnLink: '/electro',
    bg: '#2d4739',
    accent: '#74c69d',
    img: '/img/pagethird/computers/item2.png',      // ← заменили
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // Автоматическая прокрутка каждые 5 секунд
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const slide = slides[current];

  return (
    <div className="hero-slider" style={{ background: slide.bg }}>
      {/* Картинка справа */}
      <div className="hero-img">
        <img src={slide.img} alt={slide.title} />
      </div>

      {/* Текст слева */}
      <div className="hero-content">
        <h1 className="hero-title" style={{ color: slide.accent }}>
          {slide.title}
        </h1>
        <p className="hero-subtitle">{slide.subtitle}</p>
        <Link to={slide.btnLink} className="hero-btn">
          {slide.btnText}
        </Link>
      </div>

      {/* Кнопки prev / next */}
      <button className="hero-arrow hero-arrow-left" onClick={prev}>
        ‹
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={next}>
        ›
      </button>

      {/* Точки навигации */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}