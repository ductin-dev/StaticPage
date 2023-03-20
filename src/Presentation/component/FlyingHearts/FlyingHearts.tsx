import React, { useState } from 'react';
import styles from './styles.module.css';

interface HeartProps {
    x: number;
    y: number;
}

const FlyingHearts: React.FC = () => {
    const [hearts, setHearts] = useState<HeartProps[]>([]);

    const addHeart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const newHearts = [...hearts];
        newHearts.push({ x: event.clientX, y: event.clientY });
        setHearts(newHearts);
    };

    return (
        <div className={styles.FlyingHearts} onClick={addHeart}>
            {hearts.map((heart, index) => (
                <div
                    key={index}
                    className={styles.FlyingHearts_Heart}
                    style={{ top: heart.y, left: heart.x }}
                    draggable
                    onDrag={(event) => {
                        const newHearts = [...hearts];
                        newHearts[index].x = event.clientX;
                        newHearts[index].y = event.clientY;
                        setHearts(newHearts);
                    }}
                />
            ))}
        </div>
    );
};

export default FlyingHearts;