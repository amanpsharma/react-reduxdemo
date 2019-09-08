import React from "react";
class NewPost extends React.Component {
  state = {
    title: "",
    mobile:"",
    body: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim() && this.state.mobile.trim()) {
      console.log(this.props);
      this.props.onAddPost(this.state)
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: "",
      mobile:"",
      body: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="title"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Mobile"
              className="form-control"
              name="mobile"
              onChange={this.handleInputChange}
              value={this.state.mobile}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={this.handleInputChange}
              value={this.state.body}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Post
            </button>
            <button
              type="button"
              className="btn btn-dark m-2"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPost;