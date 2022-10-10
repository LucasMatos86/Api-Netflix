import React from 'react'
import '../css/Filmes.css'

export default function Filmes({item}) {

    let data = new Date(item.first_air_date)
    let genero = []
    for(let i in item.genero) {
        genero.push(item.genero[i].name)
    }

    let descricao = item.overview
    if (descricao.length > 200) {
        descricao = descricao.substring(0, 200)+'...'
    }

    return (
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="destaque--vertical">
                <div className="destaque--horizontal">
                    <div className="destaque--nome">{item.original_name}</div>
                    <div className="destaque--info">
                        <div className="destaque--points">{item.vote_average} pontos</div>
                        <div className="destaque--year">{data.getFullYear()}</div>
                        <div className="destaque--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': '' }</div>
                        </div>
                        <div className="destaque--descricao">{descricao}</div>
                        <div className="destaque--buttons">
                            <a className="destaque--watchbutton" href={`/watch/${item.id}`}>► Assistir </a>
                            <a className="destaque--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista </a>
                        </div>
                        <div className="destaque--genero"><strong>Gêneros:</strong> {genero.join(', ')}</div>
                </div> 
            </div>
        </section>
    )
}
