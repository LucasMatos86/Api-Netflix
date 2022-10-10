import React, { useState } from 'react'
import '../css/FilmesRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function FilmesRow({titulo, items}) {

    const [scrollX, setScrollX] = useState(-400)

    function listaSetaE() {
        let esquerda = scrollX + Math.round(window.innerWidth /2) 
        if(esquerda > 0) {
            esquerda = 0
        }

        setScrollX(esquerda)
    }

    function listaSetaD() {
      
        let direita = scrollX - Math.round(window.innerWidth /2)
        let listW = items.results.length * 150
        if ((window.innerWidth - listW) > direita){
            direita = (window.innerWidth - listW) - 60
        }

        setScrollX(direita)

    }


    return (
        <div className="FilmesRow">
            <h2>{titulo}</h2>

            <div className="FilmesRow--left" onClick={listaSetaE}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="FilmesRow--right" onClick={listaSetaD}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="FilmesRow--listarea">
                <div className="FilmesRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}> {}
                    {items.results?.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="FilmesRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
