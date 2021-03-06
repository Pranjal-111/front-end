import axiosIntance from "../helpers/axios";
import { categoryConstants } from "./constants";

 export const getAllCategory=()=>{
     return async dispatch=>{
         dispatch({type:categoryConstants.GET_ALL_CATEGORY_REQUEST});
         const res = await axiosIntance.get('category/getcategory');
         console.log(res);
         if(res.status===200){
             const {categoryList} = res.data;
             dispatch({
                 type:categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                 payload:{categories:categoryList}
             })
         }else{
             dispatch({
                 type:categoryConstants.GET_ALL_CATEGORY_FAILURE,
                 payload:{error:res.data.error}
             })
         }

     }
 }


 export const addCategory = (form)=>{
     return async dispatch =>{
         dispatch({type:categoryConstants.ADD_NEW_CATEGORY_REQUEST})
         const res = await axiosIntance.post('category/create',form);
         console.log(res)
       if(res.status == 200){
           dispatch({
               type:categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
               payload:{category:res.data.category}
           });

       }else{
           dispatch({
               type:categoryConstants.ADD_NEW_CATEGORY_FAILURE,
               payload:res.data.error
           })
       }

        }

        
 }