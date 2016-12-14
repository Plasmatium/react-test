import React from 'react';
import ReactDOM from 'react-dom';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.onInputChange}
          value={this.props.textContent}
        />
        <br />
        <input
          type="checkbox"
          onChange={this.props.onCheckChange}
          checked={this.props.checked}
        />
        {'  '}
        Only show products in stock
      </form>
    );
  }
}


class Mock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarText: "",
      searchBarChecked: false
    }

    this.handleSearBarTextChange = this.handleSearBarTextChange.bind(this);
    this.handleSearchBarChecked = this.handleSearchBarChecked.bind(this);
  }

  handleSearBarTextChange(e) {
    this.setState({searchBarText: e.target.value});
  }

  handleSearchBarChecked(e) {
    this.setState({searchBarChecked: e.target.checked});
  }

  render() {
    return (
      <div>
        <SearchBar
          onInputChange={this.handleSearBarTextChange}
          onCheckChange={this.handleSearchBarChecked}
          textContent={this.state.searchBarText}
          checked={this.state.searchBarChecked}
        />
        <ProductTable
          onlyStocked={this.state.searchBarChecked}
          filterText={this.state.searchBarText}
        />
      </div>
    );
  }
}


class ProductTable extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let sports = [];
    let electronics = [];
    PRODUCTS.map((elt, idx) => {
      let found = elt.name.indexOf(this.props.filterText)!==-1;
      if(!found || (this.props.onlyStocked && !elt.stocked)) {
        return;
      }
      if(elt.category==="Sporting Goods") {
        sports.push(<ProductRow data={elt} key={idx}/>);
      }
      else {
        electronics.push(<ProductRow data={elt} key={idx}/>);
      }
    });

    let sportsCategory = sports.length!==0?<ProductTableCategory categoryName={'Sports'}/>:null;
    let electronicsCategory = electronics.length!==0?<ProductTableCategory categoryName={'Electronics'}/>:null;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        {sportsCategory}
        <tbody>
          {sports}
        </tbody>

        {electronicsCategory}
        <tbody>
          {electronics}
        </tbody>

      </table>
    );
  }
}

class ProductTableCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <thead>
        <tr>
          <th>{this.props.categoryName}</th>
        </tr>
      </thead>
    );
  }
}


class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = this.props.data.stocked?{}:{
      color: "red"
    }

    return (
      <tr>
        <td style={style}>
          {this.props.data.name}
        </td>
        <td>
          {this.props.data.price}
        </td>
      </tr>
    );
  }
}

exports.Mock = Mock;
