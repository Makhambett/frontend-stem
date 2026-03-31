import './FirstPage.css'
import TelegramButton from '../components/TelegramButton'
import HeroSlider from '../components/HeroSlider'
import CategoryGrid from '../components/CategoryGrid'

export default function FirstPage() {
  return (
    <div className="page">

      {/* HERO SLIDER */}
      <HeroSlider />
      <CategoryGrid />

      {/* BREADCRUMB */}
      <div className="breadcrumb">ДИЗАЙН ИНТЕРЬЕРА / ПАКЕТЫ ДИЗАЙНА</div>

      {/* ПАКЕТЫ */}
      <main className="packages">

        <div className="package package--s">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ S</h2>
            <p className="package__desc">Базовый ремонт и подготовка учебного кабинета.</p>
            <ul className="package__list">
              <li>базовый дизайн-проект помещения;</li>
              <li>косметический ремонт стен и потолка;</li>
              <li>обновление напольного покрытия;</li>
              <li>базовые электромонтажные работы (розетки, освещение);</li>
              <li>подготовка помещения под оборудование;</li>
              <li>сдача объекта в полностью готовом виде.</li>
            </ul>
          </div>
          <img src="/img/pagefirst/Слой1.png" alt="Стул" className="package__img" />
          <div className="package__price">от 130 000 тг за м²</div>
        </div>

        <div className="package package--m">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ M</h2>
            <p className="package__desc">Комплексный ремонт с улучшенными решениями.</p>
            <ul className="package__list">
              <li>расширенный дизайн-проект с учетом эргономики;</li>
              <li>выравнивание и декоративная отделка стен;</li>
              <li>износостойкое напольное покрытие;</li>
              <li>расширенные электромонтажные работы;</li>
              <li>подготовка под цифровое и интерактивное оборудование;</li>
              <li>сдача объекта в полностью готовом виде.</li>
            </ul>
          </div>
          <img src="/img/pagefirst/plant.png" alt="Растение" className="package__img" />
          <div className="package__price">от 130 000 тг за м²</div>
        </div>

        <div className="package package--l">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ L</h2>
            <p className="package__desc">Дизайнерский ремонт «под ключ»</p>
            <ul className="package__list">
              <li>индивидуальный дизайн-проект с 3D-визуализацией;</li>
              <li>премиальные отделочные материалы;</li>
              <li>полный электромонтаж и инженерные сети;</li>
              <li>интеграция ИТ- и мультимедийных решений;</li>
              <li>авторский и технический надзор;</li>
              <li>сдача объекта в полностью готовом виде</li>
            </ul>
          </div>
          <img src="/img/pagefirst/F5.png" alt="Кресло" className="package__img" />
          <div className="package__price">от 210 000 тг за м²</div>
        </div>

      </main>

      {/* СЕКЦИЯ DREAM */}
      <section className="dream">
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tm" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--bl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--br" />

        <div className="dream__left">
          <h2 className="dream__title">ВОПЛОТИ СВОЮ МЕЧТУ</h2>
          <p className="dream__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam,
            euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis
            ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu mi
            dapibus sodales.
          </p>
          <a href="#" className="dream__btn">ОТ 10 000 000 ТГ</a>

          <div style={{ marginTop: '16px' }}>
            <TelegramButton />
          </div>
        </div>

        <div className="dream__right">
          <img src="/img/pagefirst/room.png" alt="Комната" className="dream__room" />
        </div>
      </section>

    </div>
  )
}