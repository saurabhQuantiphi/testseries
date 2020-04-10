import React, { PureComponent } from 'react'
import SideBar from '../SideBar/Sidebar';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <route></route>
        </div>
        </div>

      </React.Fragment>
    );
  }
}