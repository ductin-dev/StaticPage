/** @type {import("next").NextConfig} */
const routerPathListSettings = [
    // MAIN PAGES
    {
        nextPath: "/Static/AboutPage",
        asPaths: ["/"],
    }
];

const nextRouterPathListSettings = [];
routerPathListSettings.map(element => {
    nextRouterPathListSettings.push({
        source: element.asPaths[0],
        destination: element.nextPath
    })
});

module.exports = {
    output: "standalone",
    reactStrictMode: true,
    async rewrites() {
        return nextRouterPathListSettings;
    },
}
