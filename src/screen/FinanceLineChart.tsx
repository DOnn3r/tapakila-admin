import { useGetList } from 'react-admin';
import { LineChart } from '@mui/x-charts';
import { Card, Typography } from '@mui/material';

export const MonthlyIncomeChart = () => {
    const { data, isLoading } = useGetList('income');
    
    const transformedData = data?.map(item => ({
        id: item.month,
        month: parseInt(item.month),
        revenue: item.revenue,
        cost: item.cost,
        profit: item.profit
    })) || [];

    return (
        <Card sx={{ p: 2 }}>
            <Typography variant="h6">Mensual income</Typography>
            <LineChart
                dataset={transformedData}
                series={[
                    { 
                        dataKey: 'revenue', 
                        label: 'Income ($)', 
                        color: '#4CAF50' 
                    },
                    { 
                        dataKey: 'cost', 
                        label: 'Cost ($)', 
                        color: '#F44336' 
                    },
                    { 
                        dataKey: 'profit', 
                        label: 'Profit ($)', 
                        color: '#2196F3' 
                    }
                ]}
                xAxis={[{
                    dataKey: 'month',
                    scaleType: 'band',
                    valueFormatter: (monthNum) => 
                        ["Jan","Fév","Mar","Avr","Mai","Jun",
                         "Jul","Aoû","Sep","Oct","Nov","Déc"][monthNum - 1] || `M${monthNum}`
                }]}
                width={500}
                height={400}
                loading={isLoading}
            />
        </Card>
    );
};