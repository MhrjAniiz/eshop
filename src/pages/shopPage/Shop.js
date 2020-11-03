import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Collection: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.Collection.map(({ id, ...othercollectionprops }) => (
          <PreviewCollection key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}
