import React, { Component } from 'react';
import UserList from './components/UserList';
import load from './utils/load';
import Searchbar from './components/SearchBar'
import ActiveUser from './components/ActiveUser';
import Toolbar from './components/Tollbar'




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
      this.initialData = JSON.parse(users);

       this.setState({
          data: JSON.parse(users)
       });

    });

  }

  updateData(config) {
    this.setState(config);
  }


  render() {

     return (
    <div className="app container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <Searchbar
            term={this.state.term}
            data={this.initialData}
            update={this.updateData.bind(this)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
        </div>
      </div>
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser update={this.updateData.bind(this)} data={this.state.data} active={this.state.active} />
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <UserList data={this.state.data} update={this.updateData.bind(this)} />
            </div>
          </div>
        </div>
      )
  }
}