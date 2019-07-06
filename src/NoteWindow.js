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
			<DialogTitle id="form-dialog-title">{this.props.edit ? 'Edit' : 'Create'} Note</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					label="Title"
					fullWidth
					value={this.props.currentNote.title}
					onChange={e => this.props.onTitleChange(e.target.value)}
				/>
				<TextField
					multiline
					rowsMax={10}
					label="Content"
					fullWidth
					value={this.props.currentNote.content}
					onChange={e => this.props.onContentChange(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={this.props.onCancel} color="primary">
					Cancel
				</Button>
				<Button onClick={this.props.onSave} color="primary">
					{this.props.edit ? 'Save' : 'Create'}
				</Button>
			</DialogActions>
		</Dialog>);
	}

}