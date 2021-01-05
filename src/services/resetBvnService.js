import base64 from 'base-64';
import axios from 'axios';

class ResetBVN {
    constructor() {
        axios.interceptors.request.use(function (config) {
            const organisationCode = base64.encode(process.env.ORGANISATION_CODE);
            config.headers['Sandbox-Key'] = process.env.SANDBOX_KEY;
            config.headers['OrganisationCode'] = organisationCode;

            return config;
        })
    }
    getBVNRequestCredentials = async () => {
        let BvnRequestCredentials = await axios.post(process.env.RESET_BVN_URL);
        return BvnRequestCredentials.headers;
    }
}

export default new ResetBVN;
