import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Note extends React.Component {

	render(){

		const st = {
			paper: {
				backgroundColor: 'yellow',
				borderRadius: 5,
				padding: 10,
				width: '50%',
				margin: '10px auto',
				marginTop: 0,
			},
			title: {
				fontSize: 20,
				fontWeigth: 'bold'
			},
			content: {
				fontStyle: 'italic',
				wordBreak: 'break-all'
			}
		}

		return (<Card style={st.paper}>
				<CardHeader>
					<Typography variant="h6">{this.props.note.title}</Typography>
				</CardHeader>
				<CardContent>
					<Typography variant="subheading">{this.props.note.content}</Typography>
				</CardContent>
			</Card>);
	}
}
