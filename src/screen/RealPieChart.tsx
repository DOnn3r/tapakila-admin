import { useGetList } from 'react-admin';
import { PieChart } from '@mui/x-charts';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const RealTicketPieChart = () => {
    const { data, isLoading, error } = useGetList('stats/ticket-types', {
        pagination: { page: 1, perPage: 10 }
    });

    if (isLoading) return <Typography>Chargement...</Typography>;
    if (error) return <Typography color="error">Erreur: {error.message}</Typography>;

    const chartData = data?.map(item => ({
        id: item.type,
        value: item.tickets_sold,
        label: `${item.type} (${item.tickets_sold})`
    })) || [];

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardHeader
                title="Répartition des billets"
                subheader="Données en temps réel"
            />
            <CardContent>
                <PieChart
                    series={[{
                        data: chartData,
                        innerRadius: 40,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        arcLabel: (item) => `${item.value}`,
                        colors: ['#0088FE', '#00C49F', '#FFBB28']
                    }]}
                    width={400}
                    height={300}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'middle' },
                        },
                    }}
                />
            </CardContent>
        </Card>
    );
};