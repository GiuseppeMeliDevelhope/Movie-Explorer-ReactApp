import React from "react";
import SuggestionSearchbar from "../components/SuggestionSearchbar";
import { useSelector } from "react-redux";

const Searchbar = () => {

const { search } = useSelector((store)=> store);
const { genres } = useSelector((store)=> store.genres);


    return(<SuggestionSearchbar movies={search} genres={genres} />);
}

export default Searchbar;