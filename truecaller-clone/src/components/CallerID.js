import React, { useState } from 'react';

const CallerID = () => {
    const [callerInfo, setCallerInfo] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLookup = () => {
        // Simulate an API call to fetch caller information
        const mockData = {
            '1234567890': { name: 'John Doe', number: '1234567890' },
            '0987654321': { name: 'Jane Smith', number: '0987654321' },
        };

        setCallerInfo(mockData[phoneNumber] || { name: 'Unknown', number: phoneNumber });
    };

    return (
        <div>
            <h2>Caller ID Lookup</h2>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleLookup}>Lookup</button>
            {callerInfo && (
                <div>
                    <h3>Caller Information:</h3>
                    <p>Name: {callerInfo.name}</p>
                    <p>Number: {callerInfo.number}</p>
                </div>
            )}
        </div>
    );
};

export default CallerID;