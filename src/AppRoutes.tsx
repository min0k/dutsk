import { FreeWritePage } from "./pages/FreeWritePage";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { AboutPage } from "./pages/AboutPage";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { NavbarComponent } from "./pageLayoutComponents/NavbarComponent";
import { HeaderComponent } from "./pageLayoutComponents/HeaderComponent";
import { Write } from "./pages/WritePage";
import { FooterComponent } from "./pageLayoutComponents/FooterComponent";
import { CreateQuestionPage } from "./pages/CreateQuestionPage";
import { RequireAuth } from "./components/RequireAuth";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";

export const AppRoutes = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <BrowserRouter>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <NavbarComponent />
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            <FooterComponent />
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <HeaderComponent />
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/free" element={<FreeWritePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/write" element={<Write />} />

          <Route
            path="/create"
            element={
              <RequireAuth>
                <CreateQuestionPage />
              </RequireAuth>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};
