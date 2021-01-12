// import BvnService from '../services/BvnService';
import { reset, verify } from '../services/BvnService'

export const resetBVN = async (req, res) => {
    try {
        const resetCredentials = await reset();
        res.status(200).json({
            success: true,
            message: 'OK',
            resetCredentials
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

export const verifyBVN = async (req, res) => {
    try {
        const { bvn, password, ivkey, aes_key } = req.body;
        const verificationResponse = await verify(bvn, password, ivkey, aes_key);
        const { FirstName, MiddleName, LastName, PhoneNumber } = verificationResponse.data;
        const details = {
            FirstName,
            MiddleName,
            LastName,
            PhoneNumber
        }
        res.status(200).json({
            success: true,
            message: 'OK',
            details
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}