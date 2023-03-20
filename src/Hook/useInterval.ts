import { DependencyList, EffectCallback } from "react";

export const useInterval = (
    intervalTarget: () => void,
    intervalMiliseconds: number,
    useEffect: (effect: EffectCallback, deps?: DependencyList | undefined) => void,
    deps?: DependencyList | undefined
) => useEffect(() => {

    const interval = setInterval(() => {
        intervalTarget();
    }, intervalMiliseconds);

    return () => clearInterval(interval);

}, [deps]);