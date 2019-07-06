import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NoteWindow from "./NoteWindow";
import Grow from "@material-ui/core/Grow";
import {CardActions} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const timeoptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    milisecond: 'numeric'
};

const formater = new Intl.DateTimeFormat('ukr', timeoptions);

export default class Note extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

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


        return (
            <Card elevation={5} style={st.paper}>
                <CardHeader
                    title={this.props.note.title}
                    action={
                        <div>
                            <IconButton onClick={this.props.onEdit}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton onClick={this.props.onRemove}>
                                <RemoveIcon/>
                            </IconButton>
                        </div>
                    }
                >
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </CardHeader>
                <CardContent>
                    <Typography variant="subheading">{this.props.note.content}</Typography>
                    <Typography>{formater.format(this.props.note.timestamp)}</Typography>
                </CardContent>
                <CardActions>
                    Edit
                </CardActions>
            </Card>);
    }
}
