import { useEffect, useRef, DependencyList } from 'react';

export const useDidMountEffect = (callback: () => void, deps?: DependencyList | undefined) => {

    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) callback();
        else didMount.current = true;
    }, deps);

};