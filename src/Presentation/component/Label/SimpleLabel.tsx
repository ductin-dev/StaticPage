import { useCombineClasses } from "@hook/useCombineClasses";
import { CommonColorType } from "@presentation/common/UIType";
import { FC } from "react";

export interface SimpleLabelType {
    text: string | number,
    color: CommonColorType,
};

const SimpleLabel: FC<SimpleLabelType> = ({ text, color }) => {

    let className = `text-xs font-semibold inline-block py-1 px-2
        uppercase rounded uppercase last:mr-0 mr-1`;
    switch (color) {
        case "red":
            className = useCombineClasses(className, "text-red-600", "bg-red-200");
            break;
        case "emerald":
            className = useCombineClasses(className, "text-emerald-600", "bg-emerald-200");
            break;
        case "gray":
            className = useCombineClasses(className, "text-gray-600", "bg-gray-200");
            break;
    };

    return (
        <span className={className}>
            {text}
        </span>
    );
};

export default SimpleLabel;