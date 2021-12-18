import axios from "axios";
   import {
      getMoviesFailure,
      getMoviesStart,
      getMovieSuccess,
     
      creatMovieFailure,
      creatMovieStart,
      createMoviSuccess,
      
      deleteMovieFailure,
      deleteMovieStart,
      deleteMovieSuccess,
   } from "./MovieActions";



export const getMovies = async (dispatch) => {
    dispatch( getMoviesStart());
 try{
  const  res= await axios.get("/movies",
  {
      headers:
      {
          token :
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(getMovieSuccess(res.data))
 }catch(err){
    dispatch(getMoviesFailure());
 }

};

//create
export const createMovie = async (movie,dispatch) => {
    dispatch( createMovieStart());
 const res=await axios.post("/movies",movie,
  {
      headers:
        {
          token :
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(createMovieSuccess(pass));
 }catch(err){
    dispatch(createMovieFailure());
 }
 

};
//delete
export const deleteMovie = async (id.dispatch) => {
    dispatch( deleteMovieStart());
 try{
  await axios.delete("/movies"+id,
  {
      headers:
      {
          token :
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(deleteMovieSuccess(id));
 }catch(err){
    dispatch(deleteMovieFailure());
 }

};