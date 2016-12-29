import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionsCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function matDispatchToProps(dispath) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionsCreators({ selectBook: selectBook}, dispath);
}

// Promote  BookList from a component to a container - it needs to know about this new
// dispath method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, matDispatchToProps)(BookList);
