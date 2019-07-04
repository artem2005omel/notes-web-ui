import React from 'react';
import Note from "./Note";
import AddButton from './AddButton';
import NoteWindow from './NoteWindow';

export default class App extends React.Component{
	
	state = {
		notes: [
			{
				title: 'some title',
				content: 'lalalalalla'
			},
			{
				title: 'another',
				content: 'some conteeeeeent'
			}
		],
        showNoteWindow: false,
        currentNote: {
            title: '',
            content: '',
        }
	}

	handleTextChange = event => {
		this.setState({
			text: event.target.value
		})
	}

	render(){

		const st={
			page: {
				height: '93vh',
				backgroundColor: 'brown',
				padding: 10
			}
		}

		return (<div style={st.page}>
                <AddButton onClick={e => this.setState({showNoteWindow: true})}/>
				{this.state.notes.map(note => <Note note={note} />)}
                <NoteWindow
                    show={this.state.showNoteWindow}
                    onTitleChange={title => this.setState({currentNote: {...this.state.currentNote, title}})}
                    onContentChange={content => this.setState({currentNote: {...this.state.currentNote, content}})}
                    onCancel={() => this.setState({
                        showNoteWindow: false,
                        currentNote: {
                            title: '',
                            content: '',
                        }
                    })}
                    onSave={() => this.setState({
                        showNoteWindow: false,
                        notes: [...this.state.notes, this.state.currentNote],
                        currentNote: {
                            title: '',
                            content: '',
                        }
                    })}
                />
			</div>);
	}
}