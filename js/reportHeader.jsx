import React from 'react';
import {render} from 'react-dom';

class ReportHeader extends React.Component {

	writeDate() {
		var monthMapping = {
			0: "January",
			1: "February",
			2: "March",
			3: "April",
			4: "May",
			5: "June",
			6: "July",
			7: "August",
			8: "September",
			9: "October",
			10: "November",
			11: "December"
		}

		var daySuffix = {
			0: "th",
			1: "st",
			2: "nd",
			3: "rd",
			4: "th",
			5: "th",
			6: "th",
			7: "th",
			8: "th",
			9: "th",
		}

		var dateString = "";
		var date = new Date();

		var day = date.getDate().toString();
		var dayLastDigit = day[day.length - 1];
		var month = date.getMonth();
		var year = date.getFullYear();

		dateString += monthMapping[month] + " ";
		dateString += date.getDate();
		dateString += daySuffix[dayLastDigit] + ", ";
		dateString += year;

		return dateString;
	}

	render() {

		var reportHeaderStyle = {
			height: '100px',
			width: '470px',
			margin: '0px auto 50px auto'
		};

		var imageStyle = {
			height: '100px',
			display: 'inline-block',
			paddingLeft: '28px'
		};

		var dateStyle = {
		    display: 'inline-block',
		    height: '100%',
		    lineHeight: '4em',
		    verticalAlign: 'top',
		    fontSize: '2.1em',
		    fontWeight: '700',
		    color: '#a5adc0',
		    paddingRight: '30px',
		    paddingLeft: '30px',
		    borderRight: '2px solid #d4d4d4'
		}

		// Get date string
		var dateText = this.writeDate();

		return(
			<div style={reportHeaderStyle} className="section report-header">
				<div style={dateStyle} className="report-header-date">{dateText}</div>
				<img style={imageStyle} className="report-header-image" src={this.props.headerImage} />
			</div>
		);
	}
}

export default ReportHeader;
