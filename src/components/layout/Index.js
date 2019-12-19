import React from "react";
import Tracks from "../tracks/Tracks";
import SearchByTrack from "../tracks/SearchByTrack";
import SearchByLyrics from "../tracks/SearchByLyrics";


const Index = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-5">
          <SearchByTrack />
        </div>
        <div className="col-2 d-flex align-items-center">
          <h1 className="d-flex justify-content-center mx-auto"><strong>OR</strong></h1>
        </div>
        <div className="col-5">
          <SearchByLyrics />
        </div>
      </div>
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
