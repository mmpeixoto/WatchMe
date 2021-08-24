import { SideBar } from "./components/SideBar/index";
import { Content } from "./components/Content/index";
import { GlobalStyle } from "./global";
import { MoviesProvider } from "./MoviesContext";

export function App() {
  return (
    <MoviesProvider>
      <GlobalStyle />
      <SideBar />

      <Content />
    </MoviesProvider>
  );
}
