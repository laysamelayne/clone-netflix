const API_KEY = "73c43010e9f40c2a5297a88e38422cc7";

const categorias = [
    {
        name: "trending",
        title: "Em Alta",
        path: `/trending/movie/week?api_key=${API_KEY}&language=pt-BR `,
        isLarge: true,
    },

    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks213`,
        isLarge: false,
    },

    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },

    {
        name: "Comedy",
        title: "Comedias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },

    {
        name: "Romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false,
    },

    {
        name: "documentary",
        title: "Documentarios",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
];

export const getMovies = async (path) => {
    try{
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    }
        catch (error) {
            console.log("error getMovies: ", error);
        }
};

export default categorias;