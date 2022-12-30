class Setting {
    static projectBaseDir = process.cwd();
    static allowedEnvironment = new Set('STAGING', 'PRODUCTION');

    static org = 'ChaiBiskuit';

    static page_limit = 100
    static non_query_params = new Set('page', 'sort_by', 'tracking');

    static remove_params = new Set('app_name', 'app_version');

}

export {Setting};