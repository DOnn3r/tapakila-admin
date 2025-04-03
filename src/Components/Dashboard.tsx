import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import { CardHeader, Container, Grid } from "@mui/material";
import { TotalEvent } from "../screen/EventsCard";
import { TotalUser } from "../screen/UserCard";
import { RealTicketPieChart } from "../screen/RealPieChart";
import { MonthlyIncomeChart } from "../screen/FinanceLineChart";

export const Dashboard = () => (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Card>
            <Title title={"Dashboard"} />
            <CardHeader title="DASHBOARD" />
            <CardContent>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 6, md: 9 }}
                    direction="row"
                    sx={{
                        flexGrow: 1,
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                    <TotalUser />
                    <TotalEvent />
                </Grid>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
            </CardHeader>
            <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly', gap: 1 }}>
                <MonthlyIncomeChart/>
                <RealTicketPieChart />
            </CardContent>
        </Card>
    </Container>
); 