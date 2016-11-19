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
*/
class MPPieChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			componentMounted: false
		}
	}

	componentDidMount() {
		this.setState({componentMounted: true});
	}

	renderChart() {
		var componentProps = this.props;
		var dataCategories = Object.keys(componentProps.data);

		var chartColors = ['#53a3eb', '#32bbbd', '#a28ccb', '#da7b80', '#2bb5e2', '#e8bc66', '#d390b6', '#a0a7d6'];

		// Change format from JQL query response to Highcharts format, i.e. {name: 'someName', y: [number]}
		var chartData = [];
		for (var i = 0; i < dataCategories.length; i++) {
			chartData.push({name: dataCategories[i], y: componentProps.data[dataCategories[i]], color: chartColors[i]});
		}

		// Sort chart data by decreasing value
		/*chartData = chartData.sort(function(a, b) {
			return b['y'] - a['y'];
		});*/

		var axisFontStyle = {
			fontSize: '1em',
			fontWeight: '600',
			fontFamily: 'Source Sans Pro'
		}

		var options = {
			chart: {
				type: 'pie',
				backgroundColor: '#fbfcfd',
				renderTo: componentProps.chartid,
				marginTop: 10,
				marginBottom: 30,
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
				enabled: true,
				floating: true,
				align: 'right',
				layout: 'vertical',
				verticalAlign: 'middle',
				itemMarginBottom: 5,
				borderWidth: 0,
				x: -90,
				y: -35
			},
			series: [{
				data: chartData,
				showInLegend: true,
				shadow: false,
				dataLabels: {
					enabled: true,
					style: {
						color: '#666',
						fontSize: '1.2em',
						fontWeight: '600',
						fontFamily: 'Source Sans Pro'
					}
				}
			}]
		}

		var pieChart = new Highcharts.Chart(options);
	}

	render() {
		if (this.state.componentMounted){
			this.renderChart();
		}

		return (
			<div id={this.props.chartid}></div>
		);
	}
}

export default MPPieChart;