import "./App.css";
import { MantineProvider } from "@mantine/core";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
