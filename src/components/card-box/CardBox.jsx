import React from 'react';

function CardBox() {
  return(
    <div className="bg-yellow-100">
      <header className="flex space-x-4 bg-yellow-400">
        <h2>Nome do Card</h2>
        <div>blabla</div>
      </header>
      <main>
        <div>Imagem</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, temporibus. Debitis, magnam obcaecati! Perspiciatis ex, natus corporis consectetur iusto provident autem odio reprehenderit temporibus quas, hic qui culpa sapiente cumque?</p>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </main>
    </div>
  )
}

export default CardBox;
