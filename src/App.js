import React from "react";
import "./App.css";
import UserResults from "./components/userResults";
import Search from "./components/search";
import SearchResult from "./components/searchResult";
import ResultsList from "./components/resultsList";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <ResultsList />
        <div className="results-section">
          <UserResults />
          <Search />
          <SearchResult />
        </div>
      </div>
    </div>
  );
}

export default App;
