import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../OrderComponent/Modal";
function Buttons(props) {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document
        .querySelectorAll("img")
        .forEach((img) => (img.style.filter = "invert(1)"));
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document
        .querySelectorAll("img")
        .forEach((img) => (img.style.filter = "invert(0)"));
    }
  };

  let history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    // console.log(searchKeyword);
    history.push("/search?keyword=" + searchKeyword);
    setSearchKeyword("");
    modalRef.current.close();
  }

  const canSearch = [searchKeyword].every(Boolean);
  const modalRef = useRef(null);
  return (
    <div className="utility-buttons-container">
      <div onClick={() => modalRef.current.open()} className="searchButton">
        <span>
        <FontAwesomeIcon icon={['fas','search']}/>
        </span>
      </div>

      <Modal ref={modalRef}>
        <div className="searchBox-wrapper">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              value={searchKeyword}
              placeholder="Search by keyword"
              autoFocus={true}
              aria-label="Search"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />

            <button
              className="search-submit-button"
              type="submit"
              disabled={!canSearch}
            >
              Search
            </button>
          </form>
        </div>
      </Modal>
      <label aria-label="themeMode" htmlFor="switch" className="themeButton">
        <div className="switch">
          <input onChange={switchTheme} id="switch" type="checkbox" />
          <span className="slider round"></span>
        </div>
      </label>
    </div>
  );
}

export default Buttons;
