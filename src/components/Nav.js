import { connect } from 'react-redux';
import { fetchBySearch } from '../actions/actionCreators';
import Filter from './Filter';

function Nav(props) {
  function searchHandler() {
    const userInput = document.querySelector('#searchInput').value;
    const { fetchBySearch } = props;
    fetchBySearch(userInput)
  }

  return (
    <nav>
      <div>
        <img src="" alt="Logo"/>
      </div>
      <div>
        <input type="search" placeholder="Search Meal" id="searchInput" />
        <button id="searchButton" onClick={() => searchHandler() } >Search</button>
      </div>
      <div>
        <Filter defaultOption="Filter By Category"/>
        <Filter defaultOption="Filter By Area"/>
      </div>
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBySearch: searchTerm => dispatch(fetchBySearch(searchTerm))
  }
}

export default connect(null, mapDispatchToProps)(Nav);
