import React, {Component} from 'react';
import './Carousel.css';

const imgUrls = [
	'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_UY268_CR3,0,182,268_AL_.jpg',
	'https://images.squarespace-cdn.com/content/v1/59e6208ae45a7cbaeb91a7fc/1508866806198-6H806R2SQKYSTGQ11BOI/ke17ZwdGBToddI8pDm48kG6DEqWFQGN86Yy_kIwYHV57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyK04k3j-IK39m3MLCy1OWzJvtn8WJ5C3AsqSwDQDxoEq/image-asset.jpeg',
	'http://www.gstatic.com/tv/thumb/v22vodart/12392207/p12392207_v_v8_aa.jpg',
	'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGX0RV3GC/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg'

];

const items = [
	{
		src: 'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
		altText: 'Hunt for the Wilderpeople',
		caption: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
		linearGradient: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))'
	},
	{
		src: 'https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_UY268_CR3,0,182,268_AL_.jpg',
		altText: 'A Decent Man',
		caption: 'Thomas Engel is always anxious to avoid conflict. At any cost. This compulsive striving for harmony, however, proves to be his road to ruin. He will fight for a peaceful solution. Violently, if need be.',
		linearGradient: ''
	},
	{
		src: 'https://images.squarespace-cdn.com/content/v1/59e6208ae45a7cbaeb91a7fc/1508866806198-6H806R2SQKYSTGQ11BOI/ke17ZwdGBToddI8pDm48kG6DEqWFQGN86Yy_kIwYHV57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyK04k3j-IK39m3MLCy1OWzJvtn8WJ5C3AsqSwDQDxoEq/image-asset.jpeg',
		altText: 'Vice Versa',
		caption: 'Come along with the crew as they travel throughout the US, Japan, BC, and Quebec to showcase skiing in the best way possible.',
		linearGradient: ''
	},
	{
		src: "http://www.gstatic.com/tv/thumb/v22vodart/12392207/p12392207_v_v8_aa.jpg",
		altText: "The Fourth Phase",
		caption: "Experience the world of Red Bull like you have never seen it before. With the best action sports clips on the web and original series, prepare for your stoke factor to be at an all time high.",
		linearGradient: ''
	},
	{
		src: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGX0RV3GC/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg',
		altText: 'Full Moon',
		caption: 'Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.',
		linearGradient: ''
	}

];


class Carousel extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
//				<img className='backgroundImgCont' src={imgUrls[this.state.currentImageIndex]} />
//				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
/*
				<img className='Background' src={imgUrls[this.state.currentImageIndex]} />
				<div className='card-text-container'>
					<img className='Card' src={imgUrls[this.state.currentImageIndex]} />
				</div>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
				<div className='Background'>

				</div>
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<ImageSlide url={ items[this.state.currentImageIndex].src } />
				<img className='Card' src={url} />

*/

	render () {
		return (
			<div className='Carousel-container'>
				<ImageSlide url={ items[this.state.currentImageIndex].src } linearGradient={ items[this.state.currentImageIndex].linearGradient} />
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="<" />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph=">" />
				<div className='Inner-Container'>
					<img className='Card' src={ items[this.state.currentImageIndex].src } alt={ items[this.state.currentImageIndex].altText} />
					<div className='Text-box'>
						<h1>{ items[this.state.currentImageIndex].altText }</h1>
						<p>{ items[this.state.currentImageIndex].caption }</p>
						<button className='Buy-now-button' type='button'>Buy Now</button>
						<button className='Watch-trailer-button' type='button'>Watch Trailer</button>
					</div>
				</div>	
			</div>

		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url, linearGradient }) => {
	const styles = {
		/*backgroundImage: `url(${url})`, ${linearGradient},*/
  		/*background: `url(${url})`, */
		backgroundImage: `url(${url})`,
	/*	background: `linear-gradient(0deg, rgba(0,0,139 ,0.1 ), rgba(0,0,139 , 0.1 )), url(${url}) `,  */
		backgroundSize: 'cover',
		height: '500px',
		backgroundPosition: 'center',
	/*
		background: 'linear-gradient(rgba(30,144,255,0.1), rgba(30,144,255,0.1))'
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '500px',
		filter: 'blur(50px)'
	*/
	};

	
	return (
		<div className="img-slide" style={styles}>
		</div>
	);
}

export default Carousel;