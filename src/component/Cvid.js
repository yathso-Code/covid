import React,  {useEffect, useState} from 'react'
import './Cvid.css';

const Cvid = () => {
 const [data, setData] = useState([]);

 const getData = async()=>{
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const result = await res.json();
        setData(result.data.regional);
        console.log(result.data.regional);
 }

  useEffect(() => {
     getData();
  },[]);

  return (
    <>
      <div className='box'>
       <div className='text_box'>
          <h2>INDIA COVID_19 Dashboard</h2>
       </div>
       <div className='table_box'>
              <table cellSpacing='0' className='table'>
                  <thead>
                   <tr>
                     <th>STATE</th>
                     <th>CONFIRMED</th>
                     <th>RECOVERED</th>
                     <th>DEATHS</th>
                     <th>ACTIVE</th>
                   </tr>
                  </thead>

                  <tbody>
                   {
                    data.map((curElm, ind)=>{
                          return(
                         <tr key={ind}>
                           <th>{curElm.loc}</th>
                           <td>{curElm.confirmedCasesIndian}</td>
                           <td>{curElm.discharged}</td>
                           <td>{curElm.deaths}</td>
                           <td>{curElm.totalConfirmed}</td>
                        </tr> 
                          )
                    })
                   }   
                  </tbody>
              </table>
       </div>
      </div>
    </>
  )
}

export default Cvid