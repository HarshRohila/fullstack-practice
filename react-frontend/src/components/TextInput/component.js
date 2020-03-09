import React from 'react';
import './style.scss';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        const label = this.props.label || '';
        this.name = this.toCamelCase(label);

        this.state = {
            isFocused: false
        }
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

    onFocus() {
        this.setState({ isFocused: true });
    }

    onBlur() {
        this.setState({ isFocused: false });
    }

    render() {
        const className = `text-input ${this.state.isFocused ? 'focused': ''}`;
        return (
            <label className={className}> 
                <span>{this.props.label}</span>
                <input 
                    type={this.props.type ? this.props.type : 'text'} 
                    name={this.name} value={this.props.value} 
                    onChange={this.props.onChange}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}>
                </input>
            </label>
        );
    }
}

export default TextInput;
