import React, { Component } from 'react';
import Button from './components/Button';
import UserList from './components/UserList';
import load from './utils/load';
import ActiveUser from './components/ActiveUser';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      term: '',
      active: 0
    };


    this.loadData();

  }

  loadData() {
    load(this.props.data).then(users => {

       this.setState({
          data: JSON.parse(users)
       });

    });

  }

  updateData(config) {
    this.setState(config);
  }

  getRandom() {
    // const random = Math.random() * (this.state.data.length - this.state.data[0].id) + this.state.data[0].id;

    // this.setState({
    //   active: Math.floor(random)
    // });
    console.log(1);
  }


  render() {

     return (
        <div className="app container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser update={this.updateData.bind(this)} data={this.state.data} active={this.state.active} />
            </div>
          </div>
        </div>
      )
  }
}