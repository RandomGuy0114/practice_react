
import React from 'react';
import Posttable from './Posttable';
import './styles.css';


function Home() {


  return (
    <div className='my-5 row justify-content-evenly' >
      <div className='col-3 bg-danger' style={{ height: '500px' }}>
      <Posttable />
      </div>
      <div className='col-7  bg-secondary' style={{ height: '500px' }}>
        <Posttable />
      </div>


    </div>
  );
}

export default Home;