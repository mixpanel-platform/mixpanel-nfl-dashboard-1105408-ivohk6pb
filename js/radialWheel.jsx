import React from 'react';
import {render} from 'react-dom';

/* 
	-- RadialWheel --

	An SVG circle with a radial rim meter
	and a single-run animation to "fill" the wheel to a specified value
	NOTE: Re-sizing this component is difficult, it's best left as-is
*/

/* PROPS:
	'meterHeader':
			Type: String
			Header above the meter; displays the metric being rendered

	'meterValue':
			Type: String
			Text to display in center of wheel, either a number or a percentage
			
			** NOTE ** 
			This component does no calculations, it only renders data
			that has already been computed

	'meterTextColor':
			Type: String
			Hex code for center text's color

	'wheelColor':
			Type: String
			Hex code for the wheel's meter color

	'percentFull':
			Type: String (cast from int/float)
			A single number percentage to fill the radial wheel, in range [0,100]
*/

class RadialWheel extends React.Component {

	render() {
		/////    CSS    /////
		var wrapperCSS = {
			display: 'inline-block',
			textAlign: 'center',
			width: '150px'
		}

		var headerCSS = {
			marginBottom: '15px',
			color: '#747d94',
			fontSize: '1.5em',
			lineHeight: '1.1',
			fontFamily: 'Source Sans Pro, sans-serif',
			fontWeight: '600'
		}

		var backgroundCSS = {
			backgroundColor: '#dfe2ec',
			width: '150px',
			height: '150px',
			boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
			position: 'relative',
			borderRadius: '50%'
		}

		var valueCSS = {
			color: this.props.meterTextColor,
			background: '#fff',
			display: 'inline-block',
			width: '130px',
			height: '130px',
			margin: '10px',
			backgroundColor: '#fff',
			zIndex: '2',
			fontSize: '1.875rem',
			lineHeight: '130px',
			fontFamily: 'Open Sans, sans-serif',
			fontWeight: '700',
			position: 'relative',
			borderRadius: '50%'
		}

		var svgCSS = {
			position: 'absolute',
			top: '0',
			left: '0',
			background: 'transparent',
			zIndex: '1',
			transform: 'rotate(-90deg)',
			borderRadius: '50%'
		}

		// Make the animation name by concatenating meter's color and percentage
		var meterCSS = {
			stroke: this.props.wheelColor,
			animation: "fillMeterTo" + this.props.percentFull + ' 1000ms ease-out 250ms 1 normal forwards',
			strokeWidth: '32',
			strokeDasharray: '0 100',
			fill: 'transparent'
		}

		return(
			<div style={wrapperCSS}>
				<h2 style={headerCSS}>
					{this.props.meterHeader}
				</h2>
				<div style={backgroundCSS}>
					<div style={valueCSS}>
						{this.props.meterValue}
					</div>
					<svg viewBox="0 0 32 32" style={svgCSS}>
						<circle style={meterCSS} cx="16" cy="16" r="16"></circle>
					</svg>
				</div>
			</div>
		);
	}

	// When component first loads, create a <style> element and add animation CSS to it
	componentDidMount() {
		var styleEl = document.createElement('style');
		document.getElementsByTagName('head')[0].appendChild(styleEl);		
		this.stylesheet = document.styleSheets[document.styleSheets.length-1];

		// Insert animation CSS into created <style> element
		this.stylesheet.insertRule(" 												\
			@keyframes " + "fillMeterTo" + this.props.percentFull + "{				\
				0% {																\
					stroke-dasharray: 0 100;										\
				}																	\
				100% {																\
					stroke-dasharray: "	+ this.props.percentFull + " 100			\
				}																	\
			}", this.stylesheet.rules.length);
	}
}

export default RadialWheel;