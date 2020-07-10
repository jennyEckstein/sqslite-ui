import React, { Component } from "react";
import XMLParser from "react-xml-parser";

class AddQueue extends Component {
  state = {};

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.experess }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        Action: "CreateQueue",
        QueueName: this.state.post,
      }),
    });
    const body = await response.text();
    console.log("add queues: ", body);
    const xml = new XMLParser().parseFromString(body);
    const currentQueueName = xml.getElementsByTagName("QueueUrl");
    console.log("currentQueueName", currentQueueName[0].value);
    this.setState({ responseToPost: currentQueueName[0].value });
    console.log("state af add:", this.state.responseToPost);
  };

  render() {
    console.log("AddQueue state:", this.state);
    return (
      <div className="App">
        <p>{this.state.response}</p>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Add Queue Name:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default AddQueue;
