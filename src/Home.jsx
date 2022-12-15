
import React from 'react';
import {PostTable, UserInfo, Time} from './Posttable';
import './styles.css';


function Home() {
  return (
    <div className='my-5 row justify-content-evenly' >
      <div className='col-3 bg-danger' style={{ height: '500px' }}>
        <UserInfo />
        <Time />
      </div>
      <div className='col-7  bg-secondary' style={{ height: '500px' }}>
        <PostTable />
      </div>
    </div>
  );
}

export default Home;