import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {

  const navigate = useNavigate();

  const token = Cookies.get("jwtToken");

  useEffect(()=>{

    if(token !== undefined){

      navigate("/");

    }

  },[])

    const [allValues,setValues] = useState({
        username:"",
        password:"",
        showErrorMsg:false,
        errorMsg:""
    });

    const onSubmitUserDetails = async(event)=>{
        event.preventDefault();


        let api = "https://apis.ccbp.in/login";

        let userDetails = {
            username: allValues.username,
            password: allValues.password
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }

        let response = await fetch(api , options);

        let data = await response.json();

        
        if(response.ok === true){

          setValues({...allValues,showErrorMsg:false,errorMsg:""});

          Cookies.set("jwtToken",data.jwt_token)

          navigate("/");

          

        }
        else{

          setValues({...allValues,showErrorMsg:true,errorMsg:data.error_msg});

        }

      

    }

    const onChangeUsername = (e)=>{

        setValues({...allValues, username : e.target.value})

    }

    const onChangePassword = (e)=>{

        setValues({...allValues, password : e.target.value})
    }



  return (
    <div className="login-cont">
      <form className="form-cont" onSubmit={onSubmitUserDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br /><br />
        {
          allValues.showErrorMsg ? (<p className="text-danger">{allValues.errorMsg}</p>) : null
        }
      </form>
    </div>
  );
};

export default Login;