import React from "react";
import About from "./About";
import Feed from "./Feed";
import Projects from "./Projects";

const Tabs = ({ user, repos }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-zinc-900">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal" +
                                    (openTab === 1
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Feed
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-zinc-900">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 2
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                About
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:bg-gray-200 dark:hover:bg-zinc-900">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 3
                                        ? "dark:text-white border-b-4 border-red-600"
                                        : "dark:text-gray-400 text-gray-500")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                        <div className="py-4 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Feed user={user} />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <About />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <Projects repos={repos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;