import React, { useEffect, useState } from 'react';
import './App.css';
import Api from './Api';
import FilmesRow from './components/js/FilmesRow';
import Filmes from './components/js/Filmes';
import Header from './components/js/Header';
import Footer from './components/js/Footer';
import LoadingLogo from './img/Netflix_LoadTime.gif'

function App() {

  const [listaFilmes, setlistaFilmes] = useState([])
  const [dados, setdados] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      let lista = await Api.getLista()
      setlistaFilmes(lista)
      
      let original = lista.filter(i=>i.slug === 'original')
      let randomChosen = Math.floor(Math.random() * (original[0].items.results.length -1))
      let chosen = original[0].items.results[randomChosen]
      let chosenInfo = await Api.getInfo(chosen.id, 'tv')
      setdados(chosenInfo)
    }

    loadAll()
  },[])

  useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener) // Se houver scroll  vai rodar a função scrollListener definida acima

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  },[])

  return (
    <div className="page">

      <Header black={blackHeader}/> {}

      {dados &&
      <Filmes item={dados}/>}
      <section className="lists">
        {listaFilmes.map((item, key) => (
          <FilmesRow key={key} titulo={item.titulo} items={item.items} />
        ))}
      </section>

      <Footer />


        {listaFilmes.length === 0 && 
      <div className="loading">
          <img src={LoadingLogo} alt="loading"/>
      </div>}

    </div>
  );
}

export default App;
