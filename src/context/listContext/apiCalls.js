
import axios from "axios";
import {
   createListStart,
  getListsStart
   //  getMoviesFailure,
//  getMoviesStart,
//  getMovieSuccess,

//  creatMovieFailure,
//  creatMovieStart,
//  createMoviSuccess,
 
//  deleteMovieFailure,
//  deleteMovieStart,
//  deleteMovieSuccess,
} from "./ListActions";


export const getLists = async (dispatch) => {
    dispatch( getListsStart());
 try{
  const  res= await axios.get("/lists",
  {
      headers:
      {
          token :
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(getListsSuccess(res.data))
 }catch(err){
    dispatch(getListsFailure());
 }

};

//create
export const createList = async (List,dispatch) => {
    dispatch( createListStart());
 const res=await axios.post("/lists",list,
  {
      headers:
        {
          token :
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(createListSuccess(res.data));
 } catch(err){
    dispatch(createListFailure());
 }
 

};
//delete
export const deleteList = async (id.dispatch) => {
    dispatch( deleteListStart());
 try{
  await axios.delete("/lists"+id,
  {
      headers:
      {
          token :
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    dispatch(deleteListSuccess(id));
 }catch(err){
    dispatch(deleteListFailure());
 }

};