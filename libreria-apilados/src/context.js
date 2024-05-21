import React, {useState, useContext, useEffect} from 'react';


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLatestBooks = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/libros'); // Ruta en tu servidor para obtener los últimos libros
            const data = await response.json();
            setBooks(data.libros); // Actualiza el estado de libros con los últimos libros obtenidos
            setLoading(false);
        } catch (error) {
            console.error('Error fetching latest books:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestBooks(); // Llama a la función para obtener los últimos libros cuando el componente se monta
    }, []);

    return (
        <AppContext.Provider value = {{
            loading, books,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};