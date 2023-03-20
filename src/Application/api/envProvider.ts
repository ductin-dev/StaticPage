import configData from "@env";

var ENV_CONFIG = configData.DEFAULT;
switch (process.env.NODE_ENV) {
    case 'development':
        ENV_CONFIG = configData.DEVELOPMENT;
        break;
    case 'production':
        ENV_CONFIG = configData.PRODUCTION;
        break;
};

export default ENV_CONFIG;