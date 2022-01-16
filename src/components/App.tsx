import React from 'react';
function App() {
    const getDateTime = () => {
        const datetime = new Date();
        return (
            <div>
                <div>{datetime.toLocaleTimeString()}</div>
                <div>{datetime.toLocaleDateString()}</div>
            </div>
        );
    }
    return (
        <section className="hero is-large is-link">
            <div className="hero-body">
                <p className="title">
                    {getDateTime()}
                </p>
                <p className="subtitle has-text-dark">
                    Last loaded
                </p>
            </div>
        </section>
    );
}

export default App;