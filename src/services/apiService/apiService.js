import axios from 'axios';

export default (initialConfig) => ({
    execute: ({method, url, headers, token, data}) => {
        
        const config = {
            method,
            url: `${initialConfig.baseUrl}/${url}`,
            data,
        };

        return axios(config);
    }
});
