import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import SearchResults from "./components/SearchForm/SearchFormResults";
import UpdateBookForm from "./components/updateBook/updateBook";
import AddBook from "./components/AddBook/AddBook";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        {/* Ruta para el formulario de agregar libro */}
        <Route path="agregar-libro" element={<AddBook />} />
        {/* Ruta para buscar libros */}
        <Route path="/search-results" element={<SearchResults />} />
        {/* Ruta para actualizar libro */}
        <Route path="/update-book" element={<UpdateBookForm/>} />
        {/* Ruta para mostrar todos los libros */}
        <Route path="listar-todos" element={<BookList />} />


        {/* Ruta para el resto de la aplicación */}
          <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        
      
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
