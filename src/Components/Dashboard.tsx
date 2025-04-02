import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import {CardHeader, Grid } from "@mui/material";
import { TotalEvent } from "../screen/EventsCard";
import { TotalUser } from "../screen/UserCard";

export const Dashboard = () => (
    <Card>
        <Title title={"Dashboard"}/>
        <CardHeader title="DASHBOARD" />
        <CardContent>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 6, md: 9 }}
                direction="row"
                sx={{
                    flexGrow: 1,
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                <TotalUser/>
                <TotalEvent/>
                {/*<Card sx={{ backgroundColor: '#F0EBE3', width: 300 }}>
                    <Title />
                    <CardHeader title="Events" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ backgroundColor: '#F0EBE3', width: 300 }}>
                    <Title />
                    <CardHeader title="Events" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>*/}
            </Grid>
        </CardContent>
        {/*<BasicBars/>*/}
    </Card>
); 