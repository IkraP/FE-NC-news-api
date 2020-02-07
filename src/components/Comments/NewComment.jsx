import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import ErrorPage from "../ErrorPage";

export default class NewComment extends Component {
  state = {
    comment: "",
    err: null
  };
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { article_id } = this.props;
    api
      .postCommentsByArticleId(article_id, comment)
      .then(newComment => {
        this.setState({ comment: "" });
        this.props.postNewComment(newComment);
      })
      .catch(err => this.setState({ err }));
  };

  render() {
    const { comment, err } = this.state;
    const { loggedUser } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <textarea
              required
              name="comment"
              value={comment}
              placeholder="Enter your comment ..."
              onChange={event =>
                this.handleChange(event.target.value, "comment")
              }
            />
          </label>
          <button disabled={loggedUser === ""} type="submit">
            submit comment
          </button>
        </form>
      );
    }
  }
}
