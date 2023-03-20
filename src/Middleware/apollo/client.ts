import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

import ENV from "@application/api/envProvider";

let apolloClient: ApolloClient<NormalizedCacheObject>;
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: ENV.server.name,
        }),
        cache: new InMemoryCache(),
    });
};

export function initializeApollo() {
    const _apolloClient = apolloClient ?? createApolloClient();

    // if (initialState) {
    //     const existingCache = _apolloClient.extract();
    //     _apolloClient.cache.restore({ ...existingCache, ...initialState as any});
    // }
    if (typeof window === "undefined") return _apolloClient;

    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
};
