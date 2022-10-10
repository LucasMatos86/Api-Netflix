const API_KEY = 'ef4624285a43c84c186dab2548733ed6'
const API_BASE = 'https://api.themoviedb.org/3'

const FetchB = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}


export default {
    getLista: async () => {
        return [
        {
            slug: 'original',
            titulo: 'Originais da Netflix',
            items: await FetchB(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            titulo: 'Recomendados para você',
            items: await FetchB(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            titulo: 'Em alta',
            items: await FetchB(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            titulo: 'Ação',
            items: await FetchB(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            titulo: 'Comédia',
            items: await FetchB(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            titulo: 'Terror',
            items: await FetchB(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            titulo: 'Romance',
            items: await FetchB(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            titulo: 'Documentários',
            items: await FetchB(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
        ]
    },

    getInfo: async (filmes, tipo) => {
        let info = {};

        if(filmes){
            switch(tipo){
                case 'movie':
                    info = await FetchB(`/movie/${filmes}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await FetchB(`/tv/${filmes}?language=pt-BR&api_key=${API_KEY}`);
                break;

                default:
                    info = null;
                break;

            }
        }else{

        }
        return info;
    }
}