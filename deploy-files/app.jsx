import React, { useState } from "react";

/**
 * Deploy Files - React JSX Application
 * A simple React component demonstrating state and props.
 */

/** Card component displaying a title and description. */
function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

/** Main App component. */
function App() {
    const [count, setCount] = useState(0);

    const features = [
        { title: "Fast Deployment", description: "Deploy your apps in seconds." },
        { title: "Auto Scaling", description: "Scale automatically based on traffic." },
        { title: "Monitoring", description: "Real-time monitoring and alerts." },
    ];

    return (
        <div className="app">
            <header>
                <h1>Deploy Files App</h1>
                <p>A React-powered deployment dashboard.</p>
            </header>

            <section className="counter">
                <h2>Counter: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="card-grid">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
