import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import Auth0ProviderWithHistory from "./auth0Provider";
import { LoggedInUserContext } from "./context/LoggedInUserContext";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const [loggedInUser, setLoggedInUser] = useState<any>();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Auth0ProviderWithHistory>
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
      </Auth0ProviderWithHistory>
    </LoggedInUserContext.Provider>
  );
}

export default App;
