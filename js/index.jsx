// Import React & React's render() method
import React from 'react';
import {render} from 'react-dom';


// Import component(s)
import ReportHeader from './reportHeader.jsx';
import LoadingCircles from './loadingCircles.jsx';
import RadialWheel from './radialWheel.jsx';
import MPChart from './mpChart.jsx';
import MPPieChart from './mpPieChart.jsx';
import MultiTouchAttribution from './multiTouchAttribution.jsx';


// Template Start: place HTML and components within the <div> wrapper
// in the return statement of render()
class App extends React.Component {

	constructor(props) {
		super(props);

		var topSectionData = {
			'Desktop': 30000,
			'Android': 22300,
			'iOS': 27100,
			'TV': 18800
		};

		var attributionAggregateData = {
			'Twitter': 330000,
			'Facebook': 280000,
			'Email': 170000,
			'Organic': 155000
		}

		var conversionFlowData = [
			{ 	
				key: [
					'Account Made',
					'Watched Video',
					'Premium'
				],
				value: {
					count: 8,
					revenue: 2343
				} 
			},
			{ 
				key: [
					'Referral',
					'Premium'
				],
				value: {
					count: 17,
					revenue: 3592
				}
			},
			{
				key: [
					'Referral',
					'Watched Video',
					'Premium'
				],
				value: {
					count: 31,
					revenue: 2800
				}
			},
			{
				key: [
					'Account Made',
					'Clicked Ad',
					'Premium'
				],
				value: {
					count: 44,
					revenue: 3001
				}
			}
		];

		this.state = {
			segmentData: topSectionData,
			attributionType: 'Aggregate',
			attributionData: attributionAggregateData,
			flowData: conversionFlowData
		}
	}

	// Set attribution pie chart with aggregate data
	setAttributionAggregate() {
		var data = {
			'Twitter': 330000,
			'Facebook': 290000,
			'Email': 140000,
			'Organic': 130000
		}
		this.setState({ attributionType: 'Aggregate', attributionData: data });
	}

	// Set attribution pie chart with desktop data
	setAttributionDesktop() {
		var data = {
			'Twitter': 110000,
			'Facebook': 150000,
			'Email': 30000,
			'Organic': 90000
		}
		this.setState({ attributionType: 'Desktop', attributionData: data });
	}

	// Set attribution pie chart with Android data
	setAttributionAndroid() {
		var data = {
			'Twitter': 150000,
			'Facebook': 90000,
			'Email': 60000,
			'Organic': 20000
		}
		this.setState({ attributionType: 'Android', attributionData: data });
	}

	// Set attribution pie chart with iOS data
	setAttributioniOS() {
		var data = {
			'Twitter': 90000,
			'Facebook': 120000,
			'Email': 50000,
			'Organic': 60000
		}
		this.setState({ attributionType: 'iOS', attributionData: data });		
	}

	render() {

		return(
			<div className="mixpanel-platform-body report-width-wrapper">
				{/* Header */}
				<ReportHeader headerImage="assets/nflLogo.png" />

				{/* Metrics List (3 meters) */}
				<div className="section general-metrics-list">
					<div className="general-metric">
						<RadialWheel meterHeader="Current Active Users" meterValue="2.3M" meterTextColor="#0d920b" wheelColor="#61bf60" percentFull="101" />
						<div className="meter-subtext">
							<img className="meter-subtext-arrow" src="assets/uparrow_green.png" />
							<span className="meter-subtext-green">2.1%</span> week over week
						</div>		
					</div>
					<div className="general-metric">
						<RadialWheel meterHeader="Signups Today" meterValue="890" meterTextColor="#0d920b" wheelColor="#61bf60" percentFull="101" />
						<div className="meter-subtext">
							<img className="meter-subtext-arrow" src="assets/uparrow_green.png" />
							<span className="meter-subtext-green">1.3%</span> week over week
						</div>
					</div>
					<div className="general-metric">
						<RadialWheel meterHeader="Article Completion Rate" meterValue="31%" meterTextColor="#b73434" wheelColor="#d84b59" percentFull="31" />
						<div className="meter-subtext">
							<img className="meter-subtext-arrow" src="assets/downarrow_red.png" />
							<span className="meter-subtext-red">3.0%</span> week over week
						</div>
					</div>
				</div>

				{/* Segmentation Charts */}
				<div className="section segmentation-graphs">
					<div className="section-header">
						Premium Content Views By Platform (Today)
					</div>
					<MPChart chartid={'test-chart-one'} data={this.state.segmentData} yAxisTitle={''}/>
				</div>

				{/* Attribution Chart */}
				<div className="section attribution-graph">
					<div className="section-header">
						Attribution Sources
					</div>
					<div className="attribution-platform-selector">
						<div onClick={this.setAttributionAggregate.bind(this)} className="attribution-button">Aggregate</div>
						<div onClick={this.setAttributionDesktop.bind(this)} className="attribution-button">Desktop</div>
						<div onClick={this.setAttributionAndroid.bind(this)} className="attribution-button">Android</div>
						<div onClick={this.setAttributioniOS.bind(this)} className="attribution-button">iOS</div>
					</div>
					<div className="attribution-type">{this.state.attributionType}</div>
					<div className="attribution-chart-wrapper">
						<MPPieChart chartid={'attribution-chart'} data={this.state.attributionData} />
					</div>
				</div>

				{/* Content Scoring */}
				<div className="section content-scoring">
					<div className="section-header">
						Content Scoring
					</div>
					<div className="content-score">
						<h3>Scores for Sunday, 11/13</h3>
						<table>
							<tbody>
								<tr className="content-score-table-header">
									<th className="demographics-table-header team-at">@</th>
									<th className="demographics-table-header">
										<div>
											<img className="score-logo" src="assets/chiefslogo.png" />
										</div>
										<div>
											<img className="score-logo" src="assets/pantherslogo.png" />
										</div>
									</th>
									<th className="demographics-table-header">
										<div>
											<img className="score-logo" src="assets/broncoslogo.png" />
										</div> 
										<div>
											<img className="score-logo" src="assets/saintslogo.png" />
										</div>
									</th>
									<th className="demographics-table-header">
										<div>
											<img className="score-logo" src="assets/packerslogo.png" />
										</div>
										<div>
											<img className="score-logo" src="assets/titanslogo.png" />
										</div>
									</th>
								</tr>
								<tr>
									<td className="table-field">Views</td>
									<td className="table-data">15.2M</td>
									<td className="table-data">18.5M</td>
									<td className="table-data">20.3M</td>									
								</tr>
								<tr>
									<td className="table-field">Video Shares</td>
									<td className="table-data">163K</td>
									<td className="table-data">155K</td>
									<td className="table-data">191K</td>									
								</tr>
								<tr>
									<td className="table-field">Article Reads</td>
									<td className="table-data">91K</td>
									<td className="table-data">105K</td>
									<td className="table-data">126K</td>									
								</tr>
								<tr>
									<td className="table-field">Article Shares</td>
									<td className="table-data">23K</td>
									<td className="table-data">22K</td>
									<td className="table-data">31K</td>									
								</tr>
								<tr className="engagement-score">
									<td className="data-bold table-field">Engagement Score</td>
									<td className="data-bold table-data">7.96M</td>
									<td className="data-bold table-data">9.62M</td>
									<td className="data-bold table-data">10.61M</td>									
								</tr>								
							</tbody>
						</table>
					</div>
				</div>

				{/* Conversion Flows */}
				<div className="section conversion-flows">
					<div className="section-header">
						Premium User Acquisition
					</div>
					<div className="flow-wrapper">
						<MultiTouchAttribution attributionList={this.state.flowData} />
					</div>
				</div>

				{/* Demographics */}
				<div className="section demographics">
					<div className="section-header">
						Demographics
					</div>
					<div className="demographics-table table-top-teams">
						<h3>Top Fan Bases</h3>
						<table>
							<tbody>
								<tr>
									<th className="demographics-table-header"> </th>
									<th className="demographics-table-header">
										<img className="table-team-logo" src="assets/cowboyslogo.png" />
										<span>Dallas Cowboys</span>
									</th>
									<th className="demographics-table-header">
										<img className="table-team-logo" src="assets/packerslogo.png" />
										<span>Green Bay Packers</span>
									</th>
									<th className="demographics-table-header">
										<img className="table-team-logo" src="assets/patriotslogo.png" />
										<span>New England Patriots</span>
									</th>
									<th className="demographics-table-header">
										<img className="table-team-logo" src="assets/steelerslogo.png" />
										<span>Pittsburgh Steelers</span>
									</th>
								</tr>
								<tr>
									<td className="table-field">Active Users</td>
									<td className="table-data">201K</td>
									<td className="table-data">192K</td>
									<td className="table-data">175K</td>
									<td className="table-data">161K</td>
								</tr>
								<tr>
									<td className="table-field">Avg. User Session</td>
									<td className="table-data">1.2 hr</td>
									<td className="table-data">1.4 hr</td>
									<td className="table-data">1.1 hr</td>
									<td className="table-data">1.4 hr</td>
								</tr>
								<tr>
									<td className="table-field">Content Share Likelihood</td>
									<td className="table-data">27%</td>
									<td className="table-data">24%</td>
									<td className="table-data">21%</td>
									<td className="table-data">25%</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="demographics-table-wrapper">
						<div className="demographics-table table-free-vs-premium">
							<h3>Premium & Free User Averages</h3>
							<table>
								<tbody>
									<tr>
										<th className="demographics-table-header"> </th>
										<th className="demographics-table-header">Premium</th>
										<th className="demographics-table-header">Free</th>
									</tr>
									<tr>
										<td className="table-field">Videos Watched</td>
										<td className="table-data">31</td>
										<td className="table-data">8</td>
									</tr>
									<tr>
										<td className="table-field">Session Length</td>
										<td className="table-data">50m</td>
										<td className="table-data">23m</td>
									</tr>
									<tr>
										<td className="table-field">Shares</td>
										<td className="table-data">12</td>
										<td className="table-data">3</td>
									</tr>
									<tr>
										<td className="table-field">Lifetime Revenue</td>
										<td className="table-data">$160</td>
										<td className="table-data">$30</td>
									</tr>									
								</tbody>
							</table>
						</div>

						<div className="demographics-table cable-provider-views">
							<h3>Views by Cable Provider</h3>
							<table>
								<tbody>
									<tr>
										<th className="demographics-table-header"> </th>
										<th className="demographics-table-header">XFINITY</th>
										<th className="demographics-table-header">DIRECTV</th>
										<th className="demographics-table-header">DISH</th>
									</tr>
									<tr>
										<td className="table-field">Views this week</td>
										<td className="table-data">100K</td>
										<td className="table-data">82K</td>
										<td className="table-data">88K</td>
									</tr>									
									<tr>
										<td className="table-field">Views this month</td>
										<td className="table-data">88.3M</td>
										<td className="table-data">73.7M</td>
										<td className="table-data">77.2M</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));