import React from 'react';
import {render} from 'react-dom';

/* 
	PROPS:
		chartid:
				string, name of id for element to render chart in
		data:
				chart data, of form:
					{
						'US': 30000,
						'World': 22300,
						'Politics': 27100,
						'Money': 18800
					};
		yAxisTitle:
				string, name of y-axis
*/
class MPChart extends React.Component {

	// Set highcharts styles for graph axes
	drawAxisBackgrounds() {
		var chartOptions = this.options.chart;
		var cornerRadius = 0;

		var yWidth = this.chartWidth - this.plotWidth - (chartOptions.spacingLeft || (chartOptions.spacing && chartOptions.spacing[3]) || 0);
		var xHeight = this.plotHeight + (chartOptions.spacingTop || (chartOptions.spacing && chartOptions.spacing[0]) || 0);

		// Use highchart renderer rect() method to draw a colored background rectangle in plot
		this.renderer.rect(0, this.plotTop, this.chartWidth, this.plotHeight, cornerRadius)
			.attr(
				{
					'stroke-width': 0,
					'fill': '#fbfcfd',
					'zIndex': 0
				}
			).add();

		// Draw a rectangle on the Y-Axis background
		this.renderer.rect(0, this.plotTop, yWidth - 10, this.plotHeight, cornerRadius)
			.attr(
				{
					'stroke-width': 0,
					'fill': '#fbfcfd',
					'zIndex': 0
				}
			).add();
	}


	// Render a JQL query as a styled MP Chart
	componentDidMount() {

		var drawAxes = this.drawAxisBackgrounds;
		var componentProps = this.props;
		var dataCategories = Object.keys(componentProps.data);

		var chartColors = ['#53a3eb', '#32bbbd', '#a28ccb', '#da7b80', '#2bb5e2', '#e8bc66', '#d390b6', '#a0a7d6'];		

		var chartData = [];
		for (var i = 0; i < dataCategories.length; i++) {
			chartData.push({y: componentProps.data[dataCategories[i]], color: chartColors[i]});
		}


		var axisFontStyle = {
			fontSize: '1em',
			fontWeight: '600',
			fontFamily: 'Source Sans Pro'
		}

		var options = {
			chart: {
				type: 'column',
				backgroundColor: '#fbfcfd',
				renderTo: componentProps.chartid,
				marginTop: 10,
				marginBottom: 30,
				events: {
					load: drawAxes
				}
			},
			title: {
				text: null,
			},
			plotOptions: {
				series: {
					pointWidth: 25
				}
			},
			xAxis: {
				categories: dataCategories,
				labels: {
					style: axisFontStyle
				},
				tickWidth: 0
			},
			yAxis: {
				gridLineColor: '#dfe2ec', //'#E6E8EB',
				gridLineDashStyle: 'ShortDash',
				gridLineWidth: 1,
				labels: {
					style: axisFontStyle
				},
				title: {
					text: componentProps.yAxisTitle
				}
			},
			legend: {
				enabled: false
			},
			series: [{
				data: chartData,
				shadow: false
			}]
		}

		var chart = new Highcharts.Chart(options);
		
	}

	render() {
		return(
			<div id={this.props.chartid}></div>
		);
	}
}

export default MPChart;