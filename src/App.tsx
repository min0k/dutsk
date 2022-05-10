import "./App.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { AppRoutes } from "./AppRoutes";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Paper radius={0} style={{ minHeight: "100vh" }}>
          <AppRoutes />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
