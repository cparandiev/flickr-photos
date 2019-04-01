
import apiServiceD from './apiService';
import apiServiceConfigD from './apiServiceConfig';

export const apiService = apiServiceD;
export const apiServiceConfig = apiServiceConfigD;

export default apiService(apiServiceConfig);
