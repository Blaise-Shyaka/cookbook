import Filter from './Filter';

export default function Nav() {
  return (
    <nav>
      <div>
        <img src="" alt="Logo"/>
      </div>
      <div>
        <input type="search" placeholder="Search Meal" />
        <button>Search</button>
      </div>
      <div>
        <Filter defaultOption="Filter By Category" />
        <Filter defaultOption="Filter By Area"/>
      </div>
    </nav>
  );
}