import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const categories = [
  {
    title: 'Дизайн интерьера',
    path: '/',
    img: '/img/pagefirst/room.png',
  },
  {
    title: 'Мебель',
    path: '/secondpage',
    img: '/img/pagefirst/F5.png',
  },
  {
    title: 'Электротехника',
    path: '/electro',
    img: '/img/pagethird/comp.png',
  },
  {
    title: 'Декор',
    path: '/decor',
    img: '/img/pagefirst/plant.png',
  },
  {
    title: 'Оборудование',
    path: '/equipment',
    img: '/img/equipment/arduino.png',
  },
  {
    title: 'Цифровые продукты',
    path: '/digital',
    img: '/img/pagefirst/Слой1.png',
  },
];

export default function CategoryGrid() {
  return (
    <section className="cat-grid-section">
      <h2 className="cat-grid-title">Каталог</h2>
      <div className="cat-grid">
        {categories.map((cat) => (
          <Link to={cat.path} key={cat.path} className="cat-grid-card">
            <div className="cat-grid-img">
              <img src={cat.img} alt={cat.title} />
            </div>
            <span className="cat-grid-label">{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}