import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="hello-words">
        <h2>Добро пожаловать! Сайт находится в процессе разработки :)</h2>
        <article className="article">
          <p className="article__paragraph">
            Идея этого сайта в том, чтобы пользователи могли рассчитать разнообразное меню в различные виды походов.
          Сейчас это сплав, пеший поход и горный. Также на сайте планируется создать удобные таблицы продуктов и рецептов для походов (с фильтрами и сортировкой).</p>
          <p className="article__paragraph">
            Мы хотим сделать этот сайт удобным для Вас, поэтому с нетерпением ждем от Вас предложений и комментариев!
          </p>
        </article>
      </div >);
  }
}

export default Home;
