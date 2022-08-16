import { Notifications, ArrowBackIosNew } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// export function App() {
//   return <Bar options={options} data={data} />;
// }

const drawerWidth: number = 240;
const appBarHeight: number = 64;

const App: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
            <IconButton>
              <Notifications
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar
            sx={{
              pr: "10px !important",
            }}
          >
            <IconButton
              size="large"
              sx={{
                ml: "auto",
              }}
            >
              <ArrowBackIosNew
                sx={{ color: "text.secondary", fontSize: "15px" }}
              />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {[
              "Dashboard",
              "Orders",
              "Customers",
              "Reports",
              "Integrations",
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <Notifications
                    sx={{
                      color: "text.secondary",
                    }}
                  />
                  <ListItemText
                    primary={text}
                    sx={{
                      ml: "30px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListSubheader
              component="div"
              id="second-list-subheader"
              sx={{
                textAlign: "center",
              }}
            >
              Nested List Items
            </ListSubheader>
            {["Current month", "Last quarter", "Year-end sale"].map(
              (text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <Notifications sx={{ color: "text.secondary" }} />
                    <ListItemText
                      primary={text}
                      sx={{
                        ml: "30px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Grid
          container
          spacing={4}
          sx={{
            p: 4,
            mt: `${appBarHeight}px`,
            width: "100%",
            height: `calc(100vh - ${appBarHeight}px )`,
            boxSizing: "border-box",
          }}
        >
          <Grid item xs={8}>
            <Paper
              elevation={2}
              sx={{
                height: "100%",
                p: "10px",
              }}
            >
              <Typography
                color="primary.main"
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Today
              </Typography>
              <Bar options={options} data={data} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                py: 2,
                px: 1,
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="primary.main"
                  component="div"
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  Recent Deposits
                </Typography>
                <Typography variant="h4" mt={1}>
                  $3,024.00
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mt={1}>
                  on 15 March, 2019
                </Typography>
              </Box>
              <Link> View Balance</Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                height: "100%",
              }}
            >
              table
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              align="center"
              component="div"
              sx={{
                width: "100%",
              }}
            >
              Copyright © Your Website 2022.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
