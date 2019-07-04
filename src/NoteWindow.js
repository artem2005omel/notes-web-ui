import React from 'react';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";

export default class NoteWindow extends React.Component{

	render(){
		return (<Dialog open={this.props.open} onClose={this.props.onCancel} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We will send updates
					occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={this.props.onCancel} color="primary">
					Cancel
				</Button>
				<Button onClick={this.props.onCancel} color="primary">
					Subscribe
				</Button>
			</DialogActions>
		</Dialog>);
	}

}