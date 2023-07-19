import React, { Component } from 'react';

export default class Api extends Component {
  constructor() {
    super();
    this.state = {
      status: 'pending...',
      fetchData: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          this.setState({ status: 'completed', fetchData: response });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }

  render() {
    const { status, fetchData } = this.state;

    const tableRows = fetchData.map((data) => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.body}</td>
      </tr>
    ));

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{status}</h1>
              {status === 'completed' ? (
                <table className="table" border={1}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  <tbody>{tableRows}</tbody>
                </table>
              ) : (
                <div>No data found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
