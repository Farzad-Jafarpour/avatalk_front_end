import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class SearchBox extends Form {
  state = {
    data: {
      nationalCode: "",
    },
    errors: {},
  };

  schema = {
    nationalCode: Joi.string().min(10).max(10).label("National code"),
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nationalCode", "National code")}
          {this.renderButton("Search")}
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBox;
