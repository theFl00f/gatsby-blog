import React from 'react';
import FormGroup from '../components/formGroup';
import Button from '../components/button';

export default function Form({ buttonContent }) {
    return (
        <section class="contact">
            <form action="#">
                <FormGroup 
                    inputName="user-name"
                    inputType="text"
                    placeholderText="Name"
                />
                <FormGroup 
                    inputName="email"
                    inputType="email"
                    placeholderText="Email address"
                />
                <FormGroup
                    inputName="comment"
                    inputType="text"
                    placeholderText="Message"
                />
                <Button content={buttonContent} />
            </form>
        </section>
    )
}