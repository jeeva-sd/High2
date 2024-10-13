'use client';

import React, { useState } from 'react';

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to API)
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <section className="flex w-full items-center justify-center border bg-background p-4">
            <div className="flex mx-auto text-center py-8 w-full">
                <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
                <div className="bg-primary p-8 rounded-lg shadow-lg w-full">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-4 rounded-lg border border-muted-foreground text-muted-foreground"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-4 rounded-lg border border-muted-foreground text-muted-foreground"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-4 rounded-lg border border-muted-foreground text-muted-foreground"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-success text-white p-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
