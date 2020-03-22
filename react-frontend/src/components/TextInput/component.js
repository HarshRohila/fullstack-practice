import React, { useState } from 'react';
import './style.scss';

function TextInput(props) {

    const [isFocused, setIsFocused] = useState(false);
    const focusedClass = `${isFocused ? 'focused': ''}`;

    const isFilledClass = `${props.value ? 'is-filled': ''}`;

    const className = `text-input ${isFilledClass} ${focusedClass}`;

    const name = toCamelCase(props.label);

    const error = props.error;

    return (
        <React.Fragment>
            <label className={className}> 
                <span>{props.label}</span>
                <input 
                    type={props.type ? props.type : 'text'} 
                    name={name}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    ref={props.inputRef}>
                </input>
            </label>
            {error && error.message}
        </React.Fragment>
    ); 

}

function toCamelCase(name) {
    return name.split(' ').map((label, index) => {
        if (index === 0) {
            return label.toLowerCase();
        } else {
            return label.charAt(0).toUpperCase() + label.slice(1);
        }
    }).join('');
}

export default TextInput;
