import React from 'react';
function App() {
    return (
        <article className="message is-primary">
            <div className="message-header">
                <p>Last reload happened at</p>
            </div>
            <div className="message-body">
                <strong>{new Date().toLocaleString()}</strong>
            </div>
        </article>
    );
}

export default App;