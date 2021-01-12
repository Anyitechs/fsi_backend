import nibss from 'innovation-sandbox';

export const reset = async () => {
        const res = await nibss.nibss.Bvnr.Reset({
            sandbox_key: process.env.SANDBOX_KEY,
            organisation_code: process.env.ORGANISATION_CODE
        });
        return res;
}

export const verify = async (bvn, password, ivkey, aes_key) => {
        const res = nibss.nibss.Bvnr.VerifySingleBVN({
            bvn,
            sandbox_key: process.env.SANDBOX_KEY,
            organisation_code: process.env.ORGANISATION_CODE,
            password,
            ivkey,
            aes_key,
            host: 'https://sandboxapi.fsi.ng'
        });
        return res;
}

