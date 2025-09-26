import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navber';

const Root = () => {
    return (
        <div>
            <div>
<Navbar></Navbar>
       <Outlet></Outlet>
      </div>
        </div>
    );
};

export default Root;