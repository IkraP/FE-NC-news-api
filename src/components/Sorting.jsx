import React, { Component } from "react";
import ErrorPage from "../components/ErrorPage";

export default class Sorting extends Component {
  state = {
    err: null,
  };

  handleSortBy = (event) => {
    const sort_by = event.target.value;
    this.props.updateArticles(sort_by);
  };

  render() {
    const { err } = this.state;

    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <form className="articles-sorting">
            <label>Sort by: </label>
            <select onChange={this.handleSortBy}>
              <option value="date">date</option>
              {!this.props.article_id ? (
                <option value="comment_count">comments</option>
              ) : (
                ""
              )}
              <option value="votes">votes</option>
            </select>
          </form>
        </React.Fragment>
      );
    }
  }
}
