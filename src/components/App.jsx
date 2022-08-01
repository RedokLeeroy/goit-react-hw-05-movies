import { useEffect, useState } from "react";
import {fetchTrendings} from "../Service/Service"
import {Routes,Route} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { mapper } from "./utils/Mapper";
import { Trend } from "./Trends/Trends";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  const [trendings, setTrendings] = useState([])

  useEffect(() =>{

    fetchTrendings().then(({data}) => (setTrendings(mapper(data))))
  },[])

  return (<Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Trend data ={trendings} title="Trend films"/>}/>
      <Route path="/movies">
      </Route>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}/>
        
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
      </Route>
  </Routes>)
};