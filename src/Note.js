import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NoteWindow from "./NoteWindow";


export default class Note extends React.Component {

	render(){

		const st = {
			paper: {
				backgroundColor: 'rgb(170,200,88)',
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
		};

		return (<Card elevation={5} style={st.paper}>
				<CardHeader title={this.props.note.title}/>
				<CardContent>
					<Typography variant="subheading">{this.props.note.content}</Typography>
				</CardContent>
			</Card>);
	}
}
