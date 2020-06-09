import React from 'react';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ContactIcon from './contactIcon';
import Contact from '../pages/contact';

export default function ContactMain() {
    return (
        <main>
        <div class="wrapper">
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
            <section class="contact">
                <form action="#">
                    <label for="user-name" class="sr-only">Name</label>
                    <input type="text" name="user-name" id="user-name" placeholder="Name"/>
                    <label for="email" class="sr-only">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Email address"/>
                    <label for="comment" class="sr-only">comment</label>
                    <input type="text" name="message" id="message" placeholder="Message" class="comment"/>
                    <button>submit</button>
                </form>
            </section>
        </div>
    </main>
    )
}