import React from 'react';
import Note from "./Note";
import NoteWindow from './NoteWindow';
import IconButton from "@material-ui/core/IconButton";
import PlusIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

export default class App extends React.Component {

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
    };

    handleTextChange = event => {
        this.setState({
            text: event.target.value
        })
    };

    render() {

        const st = {
            page: {
                height: '93vh',
                padding: 10
            },
            buttonContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            },
            addButton: {
                backgroundColor: 'green',
                color: 'white'
            }
        };

        return (<div style={st.page}>
            <div style={st.buttonContainer}>
                <Fab onClick={() => this.setState({showNoteWindow: true})} style={st.addButton}>
                    <PlusIcon/>
                </Fab>
            </div>

            {this.state.notes.map(note => <Note note={note}/>)}
            <NoteWindow
                open={this.state.showNoteWindow}
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