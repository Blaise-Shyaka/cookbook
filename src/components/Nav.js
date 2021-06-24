import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBySearch } from '../actions/actionCreators';
import Filter from './Filter';
import navStyles from '../styles/Nav.module.css';

function Nav(props) {
  const {
    navWrapper, searchWrapper, logo, filterWrapper,
  } = navStyles;

  function searchHandler() {
    const userInput = document.querySelector('#searchInput').value;
    const { fetchBySearch } = props;
    fetchBySearch(userInput);
  }

  return (
    <nav className={navWrapper}>
      <div className={logo}>
        <p>CookBook</p>
      </div>
      <div className={searchWrapper}>
        <input type="search" placeholder="Search Meal By Name" id="searchInput" />
        <button type="button" onClick={() => searchHandler()}>Search</button>
      </div>
      <div className={filterWrapper}>
        <Filter defaultOption="Filter By Category" />
        <Filter defaultOption="Filter By Area" />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  fetchBySearch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchBySearch: (searchTerm) => dispatch(fetchBySearch(searchTerm)),
  };
}

export default connect(null, mapDispatchToProps)(Nav);
