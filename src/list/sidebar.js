import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";


export function SideBar() {

    const history = useHistory();

    return (
        <div className="sidebar" >
            <h2>SB ADMIN <sup>2</sup></h2>
            <div className='sidebarcontent'>
               
                <div className="dashboard"
                    onClick={() => history.push('/dashboard')}>DashBoard</div>

                <div className="component"
                    onClick={() => history.push('/component')}>Component</div>

                <div className="Utilities"
                    onClick={() => history.push('/utilities')}>Utilities</div>

                <div className="Pages"
                    onClick={() => history.push('/pages')}>Pages</div>

                <div className="Charts"
                    onClick={() => history.push('/charts')}>Charts</div>

                <div className="Tables"
                    onClick={() => history.push('/tables')}>Tables</div>


            </div>

        </div>
    )
}