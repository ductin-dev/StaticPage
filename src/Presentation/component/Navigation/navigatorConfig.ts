import { useGetRouterByIndicator } from "@hook/useGetRouter";
import { AvailiablePageType, routerPathListSettings } from "@middleware/layout/routingConfig";

export interface NavigationType {
    router: AvailiablePageType;
    name?: string;
    asHref?: string;
    nextPath: string;
    current?: boolean;
};

let navigatorComputingData: NavigationType[] = [
    { router: "ABOUT", current: true, nextPath: "#" },
];

navigatorComputingData.forEach(item => {
    const router = useGetRouterByIndicator(item.router);
    if (router) {
        if (!item.name) {
            item.name = router.title;
        };

        // TODO: Muity paths
        item.asHref = router.asPaths[0];

        item.nextPath = router.nextPath;
    };
});

export const navigatorData = navigatorComputingData;
