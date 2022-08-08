import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: "darkslategray",
        },
        primary: {
          color: "darkblue",
        },
        secondary: {
          color: "darkred",
          background: "pink",
        },
      },
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            border: "1px dashed darkBlue",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: "1px dashed darkred",
          },
        },
      ],
    },
  },
});
const MyThemeComponent = styled("div", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",

  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} color="secondary">
        Secondary
      </MyThemeComponent>
    </ThemeProvider>
  );
};

export default App;
