import axios from 'axios';

const planService = async () => {
        const plans = await axios.get('https://sandboxapi.fsi.ng/relianceHMO/plans', {
            headers: {
                'Sandbox-Key': process.env.SANDBOX_KEY,
                'Content-Type': 'application/json'
            },
            params: {
                type: 'individual',
                package: 'custom'
            }
        })
        return plans.data.data;
}
export default planService;
