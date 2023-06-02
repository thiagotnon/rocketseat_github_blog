import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { BlogPropvider } from "./contexts/BlogContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogPropvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogPropvider>
    </ThemeProvider>
  );
};

export default App;
