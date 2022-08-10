import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";

interface MyThemeComponentProps {
  color?: "primary" | "secondary" | "warning";
  variant?: "normal" | "dashed";
}

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
        warning: {
          color: "white",
          background: "yellow",
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
        {
          props: { variant: "dashed", color: "warning" },
          style: {
            border: "1px dashed darkyellow",
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
    props.color === "warning" && styles.warning,
  ],
})<MyThemeComponentProps>(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
          Primary
        </MyThemeComponent>
        <MyThemeComponent sx={{ m: 1 }} color="secondary">
          Secondary
        </MyThemeComponent>
        <MyThemeComponent sx={{ m: 1 }} color="warning">
          Warning
        </MyThemeComponent>
        <MyThemeComponent sx={{ m: 1 }}>None</MyThemeComponent>
        words
      </ThemeProvider>
    </>
  );
};

export default App;
