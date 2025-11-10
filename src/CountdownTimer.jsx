// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';

const targetDate = new Date('2025-12-03T15:30:00').getTime(); 

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsOver(true);
                return {};
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []); 

    if (isOver) {
        return (
            <div className="countdown-display" style={{ padding: '10px', backgroundColor: '#d1c4e9', color: '#311b92' }}>
                <h3 style={{ margin: 0 }}>🎉 O GRANDE DIA CHEGOU! 🎉</h3>
            </div>
        );
    }

    if (Object.keys(timeLeft).length === 0) {
        return <p>Carregando Contagem Regressiva...</p>;
    }

    return (
        <div className="countdown-display" style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px 0' }}>
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} style={{ textAlign: 'center', color: '#004d40' }}>
                    <span style={{ fontSize: '2.5em', fontWeight: 'bold' }}>{value.toString().padStart(2, '0')}</span>
                    <p style={{ margin: 0, fontSize: '0.8em', textTransform: 'uppercase' }}>{unit}</p>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;