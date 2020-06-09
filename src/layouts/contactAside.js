import React from 'react';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ContactIcon from '../components/contactIcon';

export default function ContactAside() {
    return (
        <aside>
            <article class="contact-info">
                <ul class="social-links">  
                    <ContactIcon 
                        linkTarget="#" 
                        iconSrc={faFacebook} 
                        srText="Follow Sophie on Facebook"
                    />
                    <ContactIcon 
                        linkTarget="#"
                        iconSrc={faTwitter}
                        srText="Follow Sophie on Twitter"
                    />
                    <ContactIcon 
                        linkTarget="#"
                        iconSrc={faLinkedin}
                        srText="Sophie's LinkedIn Profile"
                    />
                    <ContactIcon
                        linkTarget="#"
                        iconSrc={faInstagram}
                        srText="Follow Sopie on Instagram"
                    />
                </ul>
                <div class="email-address">
                    <h4>info@email.com</h4>
                    <p>123 - 456 - 7890</p>
                    <p>123 Queen Street West, Unit 10</p>
                    <p>Toronto, Ontario</p>
                    <p>M5V2D5</p>
                </div>
            </article>
        </aside>
    )
}