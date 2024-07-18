import Header from "../header";
import DisplayJobs from "../displayJobs";
import FilterSection from "../filterSection";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import "./index.css";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobsList: [],
    empType: [],
    sallryRange: "",
    userSearch: "",
  });

  const token = Cookies.get("jwtToken");

  useEffect(() => {

    console.log(allValues.empType);

    const fetchJobsData = async () => {
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.sallryRange}&search=${allValues.userSearch}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);

      const data = await response.json();

      if (response.ok === true) {
        setValues({ ...allValues, jobsList: data.jobs });
      }

    };

    fetchJobsData();
  }, [allValues.userSearch,allValues.empType]);

  const onChangeUserIn = (e) => {
    if (e.key === "Enter") {
      setValues({ ...allValues, userSearch: e.target.value });
    }
  };

  const retriveEmpValue = (value,isCheked)=>{

    if(isCheked === true){

        setValues({...allValues,empType:[...allValues.empType,value]});
        
    }
    else{

        setValues({...allValues,empType: allValues.empType.filter(each=> each !== value ) })

    }


    

  }

  return (
    <div>
      <Header />

      <div className="filter-display-all-jobs-cont">
        <div className="filter-section-cont">
          <FilterSection empTypeFunct = {retriveEmpValue}/>
        </div>
        <div className="display-all-jobs-cont">
          <input
            onKeyDown={onChangeUserIn}
            placeholder="Search"
            type="search"
            className="form-control my-input"
          />
          <ul className="jobs-list-cont">
            {allValues.jobsList.map((each) => (
              <DisplayJobs jobsItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;