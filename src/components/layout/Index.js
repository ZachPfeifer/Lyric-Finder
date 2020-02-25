import React from "react";
import Tracks from "../tracks/Tracks";
import SearchByTrack from "../tracks/SearchByTrack";
import SearchByLyrics from "../tracks/SearchByLyrics";


const Index = () => {
  return (
    <React.Fragment>
      <div className="row">
        {/* <div className="col-5 col-sm-12"> */}
        <SearchByTrack />
        {/* </div> */}
        <div className="col-lg-1 col-md-2 col-sm-12 d-flex align-items-center mx-auto">
          <h1 className="d-flex justify-content-center mx-auto"><strong> OR </strong> </h1>
        </div>
        {/* <div className="col-5 col-sm-12"> */}
        <SearchByLyrics />
        {/* </div> */}
      </div>
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
