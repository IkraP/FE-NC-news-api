import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Topics from "./components/Topics/Topics";
import TopicPage from "./components/Topics/TopicPage";
import LoginUser from "./components/LoginUser";
import ArticlePage from "./components/Articles/ArticlePage";
import Home from "./components/Home";
import Articles from "./components/Articles/Articles";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

export default class App extends React.Component {
  state = {
    loggedUser: "",
    err: null,
  };

  getLoggedInUser = (selectedUser) => {
    this.setState({ loggedUser: selectedUser });
  };

  render() {
    const { loggedUser, err } = this.state;
    console.log(loggedUser);
    return (
      <React.Fragment>
        <header>
          <Header
            loggedUser={loggedUser}
            getLoggedInUser={this.getLoggedInUser}
          />
        </header>
        <Router>
          <LoginUser path="/users" getLoggedInUser={this.getLoggedInUser} />
          <Home path="/" loggedUser={loggedUser} />
          <Home path="/home" loggedUser={loggedUser} />
          <Articles path="/articles" loggedUser={loggedUser} />
          <ArticlePage path="/articles/:article_id" loggedUser={loggedUser} />
          <ArticlePage
            path="topics/:topic/:article_id"
            loggedUser={loggedUser}
          />
          <Topics path="/topics" loggedUser={loggedUser} />
          <TopicPage path="/topics/:topic" loggedUser={loggedUser} />
          <ErrorPage default err={err} />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
