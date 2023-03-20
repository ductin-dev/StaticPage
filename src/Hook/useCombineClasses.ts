export function useCombineClasses(...classes: string[]) {

    return classes.filter(Boolean).join(' ');

};