import React, { Component } from "react";
import XMLParser from "react-xml-parser";

// import Queue from "./Queue";

class ListQueues extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: [],
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/");
    const body = await response.json();
    console.log("LIST QUEUES:", body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ Action: "ListQueues" }),
    });
    console.log("ListQueues response:", response);
    const body = await response.text();
    console.log("list queues: ", body);
    const xml = new XMLParser().parseFromString(body);
    console.log("xml", xml);
    console.log(xml.getElementsByTagName("ListQueuesResult"));
    const res = xml.getElementsByTagName("ListQueuesResult");
    console.log("children", JSON.stringify(res[0].children));
    const allQeueus = res[0].children.map((item) => item.value);
    this.setState({ responseToPost: allQeueus });
    console.log("updated state:", this.state.responseToPost);
  };

  render() {
    const queueNames = this.state.responseToPost.map((name) => <h1>{name}</h1>);
    return (
      <div className="App">
        <p>{this.state.response}</p>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>List Queues:</strong>
          </p>

          <button type="submit">List Queues</button>
        </form>
        {/* <p> */}
        <div>{queueNames}</div>
        {/* {this.state.responseToPost.forEach((name) => {
          console.log("PASSING name:", name);
          <ListChildren name />;
        })} */}
        {/* </p> */}
      </div>
    );
  }
}

export default ListQueues;
