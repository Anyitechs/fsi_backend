import planService from '../services/PlanService';

const getPlans = async (req, res) => {
    try {
        const plans = await planService();
        res.status(200).json({
            success: true,
            message: 'OK',
            plans: plans.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export default getPlans;


