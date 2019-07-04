import React from 'react';

export default class AddButton extends React.Component{

	state={
		hover: false
	}

	render(){

        const st = {
            button: {
                width: 50,
                height: 50,
                margin: '10px auto',
                marginTop: 0,
                backgroundColor: 'green',
                borderRadius: 50,
                fontSize: 40,
                textAlign: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '10px 5px rgba(10, 10, 10, 0.7)',
                color: 'white'
            },
            hover: {
                backgroundColor: 'lightgreen'
            }
        };

		return (<div
                    onMouseEnter={e => this.setState({hover: true})}
                    onMouseLeave={e => this.setState({hover: false})}
                    onClick={this.props.onClick}
			     style={this.state.hover ? {...st.button, ...st.hover} : st.button}>
				+
	       </div>);
	}

} 