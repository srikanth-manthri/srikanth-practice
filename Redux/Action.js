import {data} from ".././data";


export const addToCart=(data)=>{
    console.log(data)
   return {
     type:'Add_To_Cart',
     payload:data
   }
   
 }
  
  export const Increment= (data)=>{
   console.log(data);
     return{
      type: 'INCREMENT',
      payload:data

       
     }
  }

export const Decrement = (data)=> {
    return{
        type:'DECREMENT',
        payload:data
    }
}

export const Delete =(item) => {
  console.log(item);
    return {
        type:'DELETE',
        payload:item
    }
}
// export const  removeItem =(data)=>{
//   console.log(data);
//     return{
//         type:" removeItem",
//         payload:data
//     }
// }



