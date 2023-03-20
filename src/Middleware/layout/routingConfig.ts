import AUTH_SCOPE_TYPE from "@middleware/authentication/authenticationScopeData";
import FPTCareImage from '@asset/image/MiniGame/FPTCare.png'

export type AvailiablePageType = "DASHBOARD" | "HANGOUT" | "HISTORY" | "AUTH" | "ABOUT" | "INSTRUCTION" | "MINIGAMEFSHIT" | "PROFILE" | "";

export interface RouterPathType {
    indicator: AvailiablePageType,

    // Props
    title: string,
    description?: string,
    thumbnail?: string,
    nextPath: string,
    asPaths: string[],
    exact: boolean,
    scope?: AUTH_SCOPE_TYPE,

    // Layout configuration
    useHelmet?: boolean,
    useLayoutHeaderFooter?: boolean,
    useLayoutBruhGift?: boolean

};

export const routerPathListSettings: RouterPathType[] = [
    // MAIN PAGES
    {
        indicator: "DASHBOARD",
        title: "Dashboard",
        description: "Money for Every One Home page",
        nextPath: "/Test/TestPage",
        asPaths: ["/", "/dashboard", "/home"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    },
    {
        indicator: "HANGOUT",
        title: "Hangout",
        description: "",
        nextPath: "/Test/TestPage",
        asPaths: ["/handout"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    },
    {
        indicator: "HISTORY",
        title: "History",
        description: "",
        nextPath: "/Test/TestPage",
        asPaths: ["/history"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    },
    {
        indicator: "AUTH",
        title: "Login or Register",
        description: "Login and Register page",
        nextPath: "/Login/LoginPage",
        asPaths: ["/login"],
        exact: true,
        useHelmet: true,
        useLayoutBruhGift: true
    },

    // HANGOUT & TRANSACTION


    // STATIC PAGE
    {
        indicator: "INSTRUCTION",
        title: "Instruction",
        description: "Instruction page",
        nextPath: "/Static/Instructionpage",
        asPaths: ["/instruction"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    },
    {
        indicator: "ABOUT",
        title: "09-09-2019 Ngày Hạnh Phúc hehe",
        description: "About page",
        nextPath: "/Static/AboutPage",
        asPaths: ["/"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    },
    {
        indicator: "MINIGAMEFSHIT",
        title: "Đừng nên làm FSHIT",
        description: "Làm nhiều chi ít là cái thói của tư bản.",
        nextPath: "/Static/TuBanPage",
        thumbnail: FPTCareImage.src,
        asPaths: ["/bruh"],
        exact: true,
        useHelmet: true,
        useLayoutHeaderFooter: true,
    },

    // PROFILE PAGES
    {
        indicator: "PROFILE",
        title: ":name",
        nextPath: "/Profile/:profileId",
        asPaths: ["/profile/:profileId"],
        exact: true,
        scope: AUTH_SCOPE_TYPE.REQUIRED_LOGIN,
        useHelmet: true,
        useLayoutHeaderFooter: true,
        useLayoutBruhGift: true
    }
];