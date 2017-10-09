import React, { Component } from 'react';
import ItemList from './ItemList'
export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="Photos">
        <div >
          Photos
          <ItemList />
        </div>
      </div>
    );
  }
}