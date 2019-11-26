import React, { Component } from 'react';
import './Homepage.css';
import Carousel from '../components/Carousel.js';

class Homepage extends Component{
	render(){
		return(
  <React.Fragment>
    <div className="Container">
      <div className="Monsoon">
        <div className="Monsoon-item">
          <div className='imgs'>
          	<img src='https://i.vimeocdn.com/video/595198868_505x160.jpg' alt='Monsoon III'/>
          </div>
          <div className='Monsoon-text-box'>
          	<h1>MONSOON III</h1>
          	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo diam. Nullam iaculis commodo tellus, eu consectetur turpis fringilla in. Proin vitae mollis odio, in malesuada nisi. Nulla id dolor quis nisl lacinia aliquam sed ullamcorper nisl. Donec in mauris felis.</p>
          </div>
        </div>
      </div>
      <div className='Beams'>
        <div className='Beams-item'>
          <div className='Beams-text-box'>
        		  <h1>BEAMS</h1>
        		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo diam. Nullam iaculis commodo tellus, eu consectetur turpis fringilla in. Proin vitae mollis odio, in malesuada nisi. Nulla id dolor quis nisl lacinia aliquam sed ullamcorper nisl. Donec in mauris felis.</p>
          </div> 
        	<div className='imgs'>
        		<img src='https://i.vimeocdn.com/video/589972810_530x315.jpg' alt='Beams'/>
        	</div>
        </div>
      </div>
      <div className='Move-2'>
      	<div className='Move-2-item'>
          <div className='imgs'>
        		<img src='https://i.vimeocdn.com/video/590587169_530x315.jpg' alt='Move 2'/>
        	</div>
          <div className='Move-2-text-box'>
            <h1>Move 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo diam. Nullam iaculis commodo tellus, eu consectetur turpis fringilla in. Proin vitae mollis odio, in malesuada nisi. Nulla id dolor quis nisl lacinia aliquam sed ullamcorper nisl. Donec in mauris felis.</p>
          </div>
        </div>
      </div>
    </div>
    <Carousel />
  </React.Fragment>

		);
	}
}




export default Homepage;

