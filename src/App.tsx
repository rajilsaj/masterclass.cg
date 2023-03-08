import React from 'react';
import './App.css';
// eslint-disable-next-line 
import imageTest from './assets/images/cami_1.jpg';

function App() {
  return (
    <div className=" App mx-auto py-8 container ">
      <img src={imageTest} className='border-4 border-cami-yellow-light rounded-full mx-auto object-cover w-96 h-96' alt='imageTest'/>
      <h1 className=' text-8xl text-center mt-8 text-cami-red'>Site web en construction.</h1>
      <footer className='mt-10 pt-2 text-center text-gray-700'>
          &copy;<span>2023, RAJILSAJ</span>
      </footer>
    </div>
  );
}

export default App;
