import React, { EffectCallback, DependencyList } from 'react';

export type MousePosition = {
    x: number,
    y: number
}

export const useMouseOverPosition = (
    mousePosition: MousePosition,
    setMousePosition: React.Dispatch<React.SetStateAction<MousePosition>>,
    useEffect: (effect: EffectCallback, deps?: DependencyList | undefined) => void
) => useEffect(() => {

    const handleMouseMove = (event: any) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };

}, []);
