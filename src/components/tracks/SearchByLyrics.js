import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class SearchByLyrics extends Component {
  state = {
    typedLyrics: '',
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.typedLyrics}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // console.log(res.data)
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list
        })
        this.setState({ typedLyrics: '' })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Consumer>
        {value => {
          //console.log(value);
          const { dispatch } = value
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music mr-4"></i>Search For a Song By Lyrics
            </h1>
              <p className="lead text-center">Get the Songs by any Lyrics</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input type="text"
                    className="form-control form-control-lg"
                    placeholder="Search by Lyrics..."
                    name="typedLyrics" //FOR ONCHANGE
                    value={this.state.typedLyrics}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btndark btn-lg btn-block mb-5" type="submit">Search</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchByLyrics;