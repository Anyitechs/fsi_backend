import axios from 'axios';

class PlanService {
    getPlans = async () => {
        let plans = await axios.get('https://sandboxapi.fsi.ng/relianceHMO/plans', {
            headers: {
                'Sandbox-Key': process.env.SANDBOX_KEY,
                'Content-Type': 'application/json'
            },
            params: {
                type: 'individual',
                package: 'custom'
            }
        })
        console.log('plans below');
        return plans.data.data;
    }
}
export default new PlanService;