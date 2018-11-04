import React, { Component } from 'react';
import './Admin.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Product from '../Admin/Product/Product';
import Food from '../Admin/Food/Food';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0
    };
  }

  tabValueChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    const { tabValue } = this.state;
    return (
      <div>
        <Tabs value={tabValue} onChange={this.tabValueChange}>
          <Tab label="Продукты" />
          <Tab label="Блюда" />
        </Tabs>
        {tabValue === 0 && <TabContainer>
          <Product />
        </TabContainer>}
        {tabValue === 1 && <TabContainer>
          <Food />
        </TabContainer>}
      </div>
    );
  }
}

export default Admin;
