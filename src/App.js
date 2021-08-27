import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import HomePage from './components/home_page/HomePage';
import AboutPage from './components/about_page/AboutPage';
import TermsOfUsePage from './components/teu_page/TermsOfUsePage';
import ContactPage from "./components/contact_page/ContactPage";
import VitaminA_Page from "./components/vitamins_pages/vitamin_a/VitaminA_Page";
import VitaminB1_Page from "./components/vitamins_pages/vitamin_b1/VitaminB1_Page";
import VitaminB2_Page from "./components/vitamins_pages/vitamin_b2/VitaminB2_Page";
import VitaminB3_Page from "./components/vitamins_pages/vitamin_b3/VitaminB3_Page";
import VitaminB5_Page from "./components/vitamins_pages/vitamin_b5/VitaminB5_Page";
import VitaminB6_Page from "./components/vitamins_pages/vitamin_b6/VitaminB6_Page";
import VitaminB7_Page from "./components/vitamins_pages/vitamin_b7/VitaminB7_Page";
import VitaminB9_Page from "./components/vitamins_pages/vitamin_b9/VitaminB9_Page";
import VitaminB12_Page from "./components/vitamins_pages/vitamin_b12/VitaminB12_Page";
import VitaminC_Page from "./components/vitamins_pages/vitamin_c/VitaminC_Page";
import VitaminD_Page from "./components/vitamins_pages/vitamin_d/VitaminD_Page";
import VitaminE_Page from "./components/vitamins_pages/vitamin_e/VitaminE_Page";
import VitaminK_Page from "./components/vitamins_pages/vitamin_k/VitaminK_Page";

export default function App() {
  return (
    <Router>
      <div className='App'>
        <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/terms_of_use">
            <TermsOfUsePage />
          </Route>
          <Route exact path="/vitamin_a">
            <VitaminA_Page />
          </Route>
          <Route exact path="/vitamin_b1">
            <VitaminB1_Page />
          </Route>
          <Route exact path="/vitamin_b2">
            <VitaminB2_Page />
          </Route>
          <Route exact path="/vitamin_b3">
            <VitaminB3_Page />
          </Route>
          <Route exact path="/vitamin_b5">
            <VitaminB5_Page />
          </Route>
          <Route exact path="/vitamin_b6">
            <VitaminB6_Page />
          </Route>
          <Route exact path="/vitamin_b7">
            <VitaminB7_Page />
          </Route>
          <Route exact path="/vitamin_b9">
            <VitaminB9_Page />
          </Route>
          <Route exact path="/vitamin_b12">
            <VitaminB12_Page />
          </Route>
          <Route exact path="/vitamin_c">
            <VitaminC_Page />
          </Route>
          <Route exact path="/vitamin_d">
            <VitaminD_Page />
          </Route>
          <Route exact path="/vitamin_e">
            <VitaminE_Page />
          </Route>
          <Route exact path="/vitamin_k">
            <VitaminK_Page />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}
