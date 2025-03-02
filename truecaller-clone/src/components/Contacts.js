import React, { useState, useEffect } from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch contacts from an API or local storage
        const fetchContacts = async () => {
            // Placeholder for fetching contacts
            const response = await fetch('/api/contacts'); // Adjust the API endpoint as needed
            const data = await response.json();
            setContacts(data);
        };

        fetchContacts();
    }, []);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Contacts</h2>
            <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredContacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;