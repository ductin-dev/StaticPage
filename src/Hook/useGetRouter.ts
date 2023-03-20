import { AvailiablePageType, routerPathListSettings, RouterPathType } from "@middleware/layout/routingConfig";

const nullRouter: RouterPathType = {
    indicator: "",
    title: "#",
    description: "#",
    nextPath: "#",
    asPaths: ["#"],
    exact: true,
}

export const useGetRouterByIndicator = (indicator: AvailiablePageType): RouterPathType => {
    const routerApplied = routerPathListSettings.filter(router => router.indicator == indicator);
    if (routerApplied) {
        return routerApplied[0];
    } else {
        return nullRouter;
    };
}

export const useGetRouterByPath = (path: string): RouterPathType => {
    const routerApplied = routerPathListSettings.filter(router => router.asPaths[0] == path);
    if (routerApplied) {
        return routerApplied[0];
    } else {
        return nullRouter;
    };
}