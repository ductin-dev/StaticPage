import React, { FC, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"

import styles from "./style.module.css";
import logoImg from "@asset/image/Logo.png";

import { useCombineClasses } from "@hook/useCombineClasses";

import NavLink from "@presentation/component/Navigation/NavLink";
import { navigatorData } from "@presentation/component/Navigation/navigatorConfig";
import { useGetRouterByIndicator } from "@hook/useGetRouter";
import { Disclosure } from "@headlessui/react";


export interface HeaderType {
    show: boolean;
    className?: string;
};

const Header: FC<HeaderType> = ({ show }) => {

    const router = useRouter();
    const loginRouter = useGetRouterByIndicator("AUTH");

    return show ? (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open } : any) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div onClick={() => router.push("/")} className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logoImg.src}
                                        alt="Lập trình cùng cóc"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logoImg.src}
                                        alt="Lập trình cùng cóc"
                                    />
                                </div>
                                {/* Main Menu */}
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigatorData.map((item, id) => (
                                            <NavLink item={item} key={id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Login/Reg buttion */}
                                <Link
                                    href={loginRouter?.nextPath}
                                    as={loginRouter?.asPaths[0]}
                                    className={useCombineClasses(
                                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "px-3 py-2 rounded-md text-sm font-medium"
                                    )}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigatorData.map((item, id) => (
                                <NavLink item={item} key={id} />
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    ) : <></>;

};

export default Header;
