import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import { CreateQuestionPage } from "./pages/CreateQuestionPage";
import { FreeWritePage } from "./pages/FreeWritePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { Write } from "./pages/WritePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/free" element={<FreeWritePage />} />
      <Route path="/settings" element={<SettingsPage />} />
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
  );
};
