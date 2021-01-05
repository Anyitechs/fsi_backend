import PlanService from '../services/planService.js';

export const getPlans = async (req, res) => {
    try {
        let plans = await PlanService.getPlans();
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