import { FC } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

import { NavigationType } from "./navigatorConfig";

import { useCombineClasses } from "@hook/useCombineClasses";

export interface NavLinkType {
    item: NavigationType;
    className?: string;
};

const NavLink: FC<NavLinkType> = ({ item }) => {

    const router = useRouter();
    let match = router.asPath == item.asHref;

    return (
        <Link
            href={item.nextPath}
            as={item.asHref}
            className={useCombineClasses(
                match ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={match ? "page" : undefined}
        >
            {item.name}
        </Link>
    );
};

export default NavLink;