import React, { useState } from 'react';
import './Footer.css'; // Import the CSS for the footer

function Footer() {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState(''); // For user feedback

    const handleSubmitQuery = async (e) => {
        e.preventDefault(); // Prevent default form submission

        setMessage('Sending...'); // Provide immediate feedback

        try {
            const response = await fetch('YOUR_API_ENDPOINT_FOR_QUERIES', { // 
                method: 'POST', // 
                headers: {
                    'Content-Type': 'application/json', // 
                },
                body: JSON.stringify({ email, query }), // 
            });

            if (response.ok) { // Check if the request was successful (status 200-299)
                setMessage('Your query has been sent successfully!');
                setEmail(''); // Clear the form
                setQuery(''); // Clear the form
            } else {
                const errorData = await response.json(); // Try to parse error message from server
                setMessage(`Failed to send query: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error sending query:', error);
            setMessage('An error occurred while sending your query. Please try again.');
        }
    };

    return (
        <footer className="footer-container">
            {/* Email Box (Placeholder for now) */}
            <div className="footer-box email-box">
                <h3>Contact Me</h3>
                <p>Feel free to reach out for any inquiries or collaboration opportunities.</p>
                {/* You might add a mailto link here or a simple display of your email */}
                <p>Please send your Query using the box on the right. 
                    Your Queries will be answered within 3 business days</p> 
            </div>

            {/* Queries Box */}
            <div className="footer-box query-box">
                <h3>Send a Query</h3>
                <form onSubmit={handleSubmitQuery}>
                    <label htmlFor="queryEmail">Your Email:</label>
                    <input
                        type="email"
                        id="queryEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your.email@example.com"
                    />

                    <label htmlFor="queryText">Your Query:</label>
                    <textarea
                        id="queryText"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                        placeholder="Type your message here..."
                    ></textarea>

                    <button type="submit">Send Query</button>
                </form>
                {message && <p className="form-message">{message}</p>}
            </div>
        </footer>
    );
}

export default Footer;