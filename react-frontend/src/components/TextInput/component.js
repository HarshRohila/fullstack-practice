import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.name = this.toCamelCase(this.props.label);
    }

    toCamelCase(name) {
        return name.split(' ').map((label, index) => {
            if (index === 0) {
                return label.toLowerCase();
            } else {
                return label.charAt(0).toUpperCase() + label.slice(1);
            }
        }).join('');
    }

    render() {
        return (
            <label> {this.props.label}
                <input type={this.props.type ? this.props.type : 'text'} name={this.name} value={this.props.value} onChange={this.props.onChange}></input>
            </label>
        );
    }
}

export default TextInput;
