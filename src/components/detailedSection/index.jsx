// import { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import './index.css';
// import { useParams } from 'react-router-dom';

// const DetailedSection =()=>{

//     const {id}=useParams();
//     const token=Cookies.get("jwtToken");

//     useEffect(()=>{
//         const fetchDetailsData =async()=>{
//             const api =`https://apis.ccbp.in/jobs/${id}`

//             const options={
//                 method : "Get",
//                 header : {
//                     Authorization : `Bearer ${token}`
//                 }
//             }
//             const response= await fetch(api,options);
//             const data =await response.json();
//             console.log(data);


//         }
//         fetchDetailsData();
//     },[])
//     return(
//         <>
//         <h1>Detailed Section</h1>
//         </>
//     )
// }
// export default DetailedSection;