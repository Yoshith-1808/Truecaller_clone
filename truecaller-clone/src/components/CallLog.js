import React from 'react';

const CallLog = () => {
    const calls = [
        { id: 1, name: 'John Doe', number: '+1234567890', timestamp: '2023-10-01 10:00', type: 'Incoming' },
        { id: 2, name: 'Jane Smith', number: '+0987654321', timestamp: '2023-10-01 11:00', type: 'Outgoing' },
        { id: 3, name: 'Alice Johnson', number: '+1122334455', timestamp: '2023-10-01 12:00', type: 'Missed' },
    ];

    return (
        <div className="call-log">
            <h2>Call Log</h2>
            <ul>
                {calls.map(call => (
                    <li key={call.id}>
                        <span>{call.name} ({call.number})</span>
                        <span>{call.timestamp}</span>
                        <span>{call.type}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CallLog;