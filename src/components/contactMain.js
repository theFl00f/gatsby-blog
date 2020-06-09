import React from 'react';

import Form from '../layouts/form';
import ContactAside from '../layouts/contactAside';

export default function ContactMain() {
    return (
        <main>
        <div class="wrapper">
            <ContactAside />
            <Form buttonContent="submit" />
        </div>
    </main>
    )
}