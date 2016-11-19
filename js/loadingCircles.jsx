import React from 'react';
import {render} from 'react-dom';

// Loading Circles - A looped SVG animation that occupies the App screen
// while API calls are waiting to return

// PROPS: 
//	'hidden': 
//			Type: Boolean
//			Indicates whether to hide Component or not
// 			(provide 'hidden' as true once App content has loaded)

class LoadingCircles extends React.Component {

	render() {

		/////    CSS    /////
		var loadingSymbolStyle = {
			position: 'fixed',
			top: '50%',
			left: '50%',
			marginTop: '-50px',
			marginLeft: '-50px',
			width: '100px',
			height: '100px',
			zIndex: '5',
			display: 'default'
		}

		// Check to hide/show component w/ 'display' CSS property
		if (this.props.hidden) {
			loadingSymbolStyle['display'] = 'none';
		}

		var mpCircleOneStyle = {
			transformOrigin: '50% 50%',
			animation: 'pulse ease-in-out both 1.2s 0s infinite'
		}

		var mpCircleTwoStyle = {
			transformOrigin: '50% 50%',
			animation: 'pulse ease-in-out both 1.2s 0.3s infinite'
		}

		var mpCircleThreeStyle = {
			transformOrigin: '50% 50%',
			animation: 'pulse ease-in-out both 1.2s 0.6s infinite'
		}

		// Insert Animation Keyframe CSS into StyleSheet
		var styleEl = document.createElement('style');
		styleEl.type = 'text/css';
		styleEl.innerHTML = 'body {}';
		document.getElementsByTagName('head')[0].appendChild(styleEl);		
		this.stylesheet = document.styleSheets[document.styleSheets.length-1];
		this.stylesheet.insertRule(" 					\
			@keyframes pulse {							\
				10% {									\
					transform: scale(1.2);				\
					opacity: 1;							\
				}										\
				90% {									\
					transform: scale(0.8);				\
					opacity: 0;							\
				}										\
			}", this.stylesheet.rules.length);


		// Render HTML
		return(
			<div>
				<svg id="loading-symbol" style={loadingSymbolStyle} viewBox="0 0 104 104" version="1.1">
					<defs>
						<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-shadow">
							<feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
							<feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
							<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>
							<feMerge>
								<feMergeNode in="shadowMatrixOuter1"></feMergeNode>
								<feMergeNode in="SourceGraphic"></feMergeNode>
							</feMerge>
						</filter>
					</defs>
					<g id="loading-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="loading-screen-group" transform="translate(-440.000000, -462.000000)">
							<g id="loading-symbol-group" transform="translate(440.000000, 462.000000)">
								<circle id="loading-circle" fill="#FFFFFF" filter="url(#filter-shadow)" cx="50" cy="50" r="50"></circle>
								<g id="loading-mp-circles-group" transform="translate(20.000000, 42.000000)" fill="#53A2EB">
									<circle id="loading-mp-circle-1" style={mpCircleOneStyle} cx="7.58823529" cy="7.58823529" r="7.58823529"></circle>
									<circle id="loading-mp-circle-2" style={mpCircleTwoStyle} cx="34.9764706" cy="7.65882353" r="5.36470588"></circle>
									<circle id="loading-mp-circle-3" style={mpCircleThreeStyle} cx="57.5647059" cy="7.65882353" r="2.43529412"></circle>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</div>
		);
	}
}

export default LoadingCircles;

// Call to render component (if not nested in another React Component as HTML)
//render(<LoadingCircles />, document.getElementById('root'));