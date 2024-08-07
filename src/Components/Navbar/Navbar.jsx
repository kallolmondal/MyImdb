import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "./Navbar.css";
import { Button } from "@mui/material";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="left-container">
          <img
            className="logo"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-1024.png"
          />
          <div className="oval-container"></div>
          <div className="text-class">Movies</div>
          <div className="text-class">TVShows</div>
          <div className="text-class">Watchlist</div>
          <div className="text-class">More</div>
        </div>
        <div className="right-container">
          <Button>
            <SearchIcon className="add-icon" />
          </Button>

          <div className="text-class-two">Login</div>

          <Button>
            <AddIcon className="search-icon" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
