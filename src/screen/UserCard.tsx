import { People } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { error } from "console";
import { useEffect, useState } from "react";
import { Title } from "react-admin";

export const TotalUser = () => {
    const [totalUser, setTotalUser] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:1818/users');
                if (!response.ok) {
                    throw new Error('faild to fetch data');
                }
                const data = await response.json();
                setTotalUser(data.length);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <Card sx={{ backgroundColor: '#F9F6EE', minWidth: 300, color: '#343434', 
                    borderLeft: '4px solid #00AB66',borderRight: '1px solid #343434', borderBottom: '1px solid #343434', 
                    ":hover": {boxShadow: '10px 10px #0039a6',scale:1.1 , transitionDelay: `100ms`} }}>
            <Title/>
            <CardContent>
                <Box display="flex" alignItems="center" marginBottom={2} sx={{ justifyContent: "space-between", }}>
                    <Typography variant="h6" component="div">
                        TOTAL CUSTOMERS
                    </Typography>
                    <People sx={{ backgroundColor: '#00AB66', padding: '5px', borderRadius: '50%', fontSize: 40, color: '#FFFAFA', marginRight: 2 }} />
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" component="div">
                        {totalUser >= 1000 ? `${(totalUser / 1000).toFixed(1)}k` : totalUser}
                    </Typography>
                </Box>
            </CardContent>
        </Card>)
};