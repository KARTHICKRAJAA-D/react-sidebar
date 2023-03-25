import React from "react";



export function DashBoard() {

  return (

    <div className="content" >
      <div className="searchbar">

        <input className='inputfield' placeholder="search here"></input>
        <button>search</button>

      </div>
      <div className="dashboardcontent">
      <h1 className="heading">Dashboard</h1>
      <div className="card2">

      <div className="card1">
      <p style={{color:"blue"}}>EARNINGS(MONTHLY)</p>
      <h3>$40,000</h3>
      </div>

      <div className="card3">
      <p style={{color:"green"}}>EARNINGS(ANNUAL)</p>
      <h3>$215,000</h3>
      </div>

      <div className="card4">
      <p style={{color:"aquamarine"}}>TASKS</p>
      <h3>50%</h3>
      </div>

      <div className="card5">
      <p style={{color:"orange"}}>PENDING</p>
      <h3>18</h3>
      </div>
      
</div>
        
      </div>

    </div>

  )
}


