import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export interface NotFound404LayoutType {
    className?: string;
};

const NotFound404Layout: FC<NotFound404LayoutType> = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-24">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <div className="text-indigo-500 font-bold text-7xl">
                        404
                    </div>

                    <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                        This page does not exist
                    </div>

                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                        The page you are looking for could not be found.
                    </div>
                </div>

                <div className="flex flex-col mt-12">
                    <div className="text-gray-400 font-bold uppercase">
                        So.. what you can do...?
                    </div>

                    <div className="flex flex-col items-stretch mt-5">
                        <div className="flex flex-row group px-4 py-8
                            border-t hover:cursor-pointer
                            transition-all duration-200 delay-100">

                            <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                <i className="mdi mdi-home-outline mx-auto 
                                    text-indigo-900 text-2xl md:text-3xl"></i>
                            </div>

                            <Link to="/">
                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Home Page
                                    </div>

                                    <div className="font-semibold text-sm md:text-md lg:text-lg
                                    text-gray-400 group-hover:text-gray-500
                                    transition-all duration-200 delay-100">
                                        Back to home page
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound404Layout;
