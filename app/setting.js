class Setting {
    static projectBaseDir = process.cwd();
    static allowedEnvironment = new Set('STAGING', 'PRODUCTION');

    static org = 'ChaiBiscuit';

    static pageLimit = 100
    static nonQueryParams = new Set('page', 'sort_by', 'tracking');

    static removeParams = new Set('app_name', 'app_version');

}

export {Setting};