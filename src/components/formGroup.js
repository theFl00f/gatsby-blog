import React, { Fragment } from 'react';

export default function FormGroup({ inputName, inputType, placeholderText }) {
    return (
        <Fragment>
            <label for={inputName} class="sr-only">{placeholderText}</label>
            <input type={inputType} name={inputName} id={inputName} placeholder={placeholderText} className={inputName === "comment" ? inputName : ""}/>
        </Fragment>
    )
}