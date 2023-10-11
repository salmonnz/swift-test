import React from "react";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";

type Props = {};

const App = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/Test2" element={<Test2 />} />
          <Route path="/Test3" element={<Test3 />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
