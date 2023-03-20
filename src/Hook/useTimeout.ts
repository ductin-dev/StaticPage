import { DependencyList, EffectCallback } from "react";

export const useTimeout = (
    immediateExcute: () => void,
    scheduleExcute: () => void,
    miliseconds: number,
) => {

    immediateExcute();
    const timeout = setTimeout(scheduleExcute, miliseconds);

    return () => clearInterval(timeout);

};