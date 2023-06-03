import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import PopularMovies from "./Containers/PopularMovies";
import MovieDetails from "./Containers/MovieDetails";
import Layout from "./components/Layout";
import { getGenres } from "./redux/genres";



const theme = createTheme();



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;


