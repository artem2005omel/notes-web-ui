import React from 'react';

export default class NoteWindow extends React.Component{

	render(){

		const st = {
			background: {
				display: this.props.show ? 'flex' : 'none',
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(50, 50, 50, 0.8)'
			},
			window: {
				width: 400,
				height: 300,
				position: 'absolute',
				backgroundColor: 'white',
				borderRadius: 5,
				padding: 10,
				// left: '50%',
				// top: '50%',
				// transform: 'translate(-50%, -50%)'
			},
			title: {
				width: '100%',
				fontSize: 20,
				marginBottom: 10,
			},
			content: {
				width: '100%',
				height: 200,
				fontSize: 16
			},
			btnSave: {
				backgroundColor: 'green',
				color: 'white',
				padding: '10px 30px',
				margin: 'auto',
				cursor: 'pointer'
			},
			btnCancel: {
				padding: '10px 30px',
				backgroundColor: 'grey',
				margin: 'auto',
				cursor: 'pointer'
			}
		};

		return (<div style={st.background}>
				<div style={st.window}>
					<input value={this.props.title} onChange={e => this.props.onTitleChange(e.target.value)} style={st.title}/>
					<textarea style={st.content} onChange={e => this.props.onContentChange(e.target.value)} >{this.props.content}</textarea>
					<div style={{display: 'flex'}}>
						<button onClick={this.props.onCancel} style={st.btnCancel}>Cacel</button>
						<button onClick={this.props.onSave} style={st.btnSave}>Save</button>
					</div>
				</div>
			</div>);
	}

}