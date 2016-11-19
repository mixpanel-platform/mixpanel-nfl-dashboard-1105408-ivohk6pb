import React from 'react';
import {render} from 'react-dom';

/*
	-- Styled Table --

	Pretty straightforward, just a table with stylings
	like 'Styled MPChart'
*/

/* PROPS:
	'tableName':
			Type: String
			Name of the table, placed above the actual table

	'data':
			Type: 2-D Array of numbers/strings
			Data to be rendered in the table
			NOTE: This component will not unpack JavaScript objects,
			so things in 'data' array must be able to be immediately written
			as HTML text, i.e. numbers or strings

	'columnAmount':
			Type: Number
			Number of columns

	'columnHeaders':
			Type: Array of Strings
			Headers for columns - make sure there are as many headers as
			specified in the 'columns' prop

*/

class StyledTable extends React.Component {

	render() {

		return(
			<div>
				<div>{this.props.tableName}</div>
			</div>
		);
	}
}

/*
	Component for rows within the table

	PROPS:
		'rowData':
			Type: Array
			Array of data to be placed in that table's row
*/

class TableRow extends React.Component {

	render() {
		return(
			<div>
				
			</div>
		);
	}
}

export default StyledTable;