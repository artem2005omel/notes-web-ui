import React from 'react';
import Note from "./Note";
import NoteWindow from './NoteWindow';
import IconButton from "@material-ui/core/IconButton";
import PlusIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import {withSnackbar} from "notistack";

class App extends React.Component {

    state = {
        edit: false,
        added: false,
        notes: [
            {
                id: 0,
                title: 'some title',
                content: 'lalalalalla',
                timestamp: Date.now()
            },
            {
                id: 1,
                title: 'another',
                content: 'some conteeeeeent',
                timestamp: Date.now()
            }
        ],
        showNoteWindow: false,
        currentNote: {
            id: 2,
            title: '',
            content: '',
        }
    };

    handleTextChange = event => {
        this.setState({
            text: event.target.value
        })
    };

    addSnack = message => this.addSnackbar(message, {variant: 'default'});
    addSuccessSnack = message => this.addSnackbar(message, {variant: 'success'});
    addInfoSnack = message => this.addSnackbar(message, {variant: 'info'});
    addWarningSnack = message => this.addSnackbar(message, {variant: 'warning'});
    addErrorSnack = message => this.addSnackbar(message, {variant: 'error'});

    addSnackbar = (message, options) => this.props.enqueueSnackbar(message, options);

    render() {
        const {added, notes, showNoteWindow, currentNote, edit} = this.state;

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
                <Fab onClick={() => this.setState({showNoteWindow: true, edit: false})} style={st.addButton}>
                    <PlusIcon/>
                </Fab>
            </div>

            {notes.map((note, index) => <Note
                onRemove={() => this.setState({notes: notes.filter((n, i) => i !== index)})}
                onEdit={() => this.setState({
                    showNoteWindow: true,
                    edit: true,
                    currentNote: JSON.parse(JSON.stringify(note))
                })}
                grow={added ? index === 0 : true}
                note={note}/>).reverse()}
            <NoteWindow
                edit={this.state.edit}
                open={showNoteWindow}
                currentNote={currentNote}
                onTitleChange={title => this.setState({currentNote: {...currentNote, title}})}
                onContentChange={content => this.setState({currentNote: {...currentNote, content}})}
                onCancel={() => this.setState({
                    showNoteWindow: false,
                    currentNote: {
                        id: notes.length,
                        title: '',
                        content: '',
                    }
                })}
                onSave={() => {
                    if (currentNote.title.length === 0)
                        this.addWarningSnack("Fill title field, please!");
                    else {
                        let newNotes = JSON.parse(JSON.stringify(notes));
                        if(edit) {
                            const noteIndx = newNotes.findIndex(n => n.id === currentNote.id);
                            newNotes.splice(noteIndx, 1, currentNote);
                        }
                        else
                            newNotes = [...newNotes, {...currentNote, timestamp: Date.now()}];
                        this.setState({
                            added: true,
                            showNoteWindow: false,
                            notes: newNotes,
                            currentNote: {
                                id: notes.length,
                                title: '',
                                content: '',
                            }
                        });
                        this.addSuccessSnack("Note successfullt created!");
                    }
                }}
            />
        </div>);
    }
}

export default withSnackbar(App);