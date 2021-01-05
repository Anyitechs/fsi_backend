import ResetBVN from '../services/resetBvnService.js';

export const resetBVN = async (req, res) => {
    try {
        const resetCredentials = await ResetBVN.getBVNRequestCredentials();
        const requestCredentials = {
            ivkey: resetCredentials.ivkey,
            aes_key: resetCredentials.aes_key,
            password: resetCredentials.password,
            email: resetCredentials.email,
            code: resetCredentials.code,
            name: resetCredentials.name
        }
        res.status(200).json({
            success: true,
            message: 'OK',
            requestCredentials
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
}