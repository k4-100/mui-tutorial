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
  createTheme,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      // position: "top" as const,
    },
    title: {
      // display: true,
      // text: "Chart.js Bar Chart",
    },
  },
};

const labels: string[] = Array(25)
  .fill("")
  .map((_, i) => {
    if (i >= 10) return `${i}:00`;

    return `0${i}:00`;
  });

const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

const createData = (
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  saleAmount: string
) => ({ date, name, shipTo, paymentMethod, saleAmount });

const rows = [
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA 3719",
    "$312.44"
  ),
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA 3719",
    "$312.44"
  ),
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA 3719",
    "$312.44"
  ),
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA 3719",
    "$312.44"
  ),
  createData(
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA 3719",
    "$312.44"
  ),
];

const CustomTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell> Name</TableCell>
            <TableCell> Ship To</TableCell>
            <TableCell> Payment Method</TableCell>
            <TableCell> Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-of-type td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.shipTo}</TableCell>
                <TableCell align="right">{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.saleAmount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
  },
});

const drawerWidth: number = 240;
const appBarHeight: number = 64;

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          // height: "100vh",
        }}
      >
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
            px: 4,
            mt: `${appBarHeight}px`,
            width: "100%",
            boxSizing: "border-box",
            "& > *:nth-of-type(-n + 2)": {
              height: "275px",
            },
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
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  "& > *": {
                    flex: 1,
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    position: "absolute",
                    transform: "rotate(-90deg) translateY(-50%)",
                    bottom: "50%",
                    // left: -1,
                  }}
                >
                  Sales ($)
                </Typography>
                <Line
                  options={options}
                  data={data}
                  style={{
                    paddingLeft: "35px",
                    maxHeight: "200px",
                    paddingBottom: "10px",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignSelf: "stretch",
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
          <Grid
            item
            xs={12}
            sx={{
              height: "450px",
            }}
          >
            <Paper
              elevation={2}
              sx={{
                height: "100%",
                p: 1,
                pt: 3,
                pl: 2,
              }}
            >
              <Typography
                color="primary.main"
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "550",
                }}
              >
                Recent Orders
              </Typography>
              <CustomTable />
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
