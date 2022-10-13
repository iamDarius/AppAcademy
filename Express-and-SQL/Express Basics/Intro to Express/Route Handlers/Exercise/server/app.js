// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Your code here
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 5000;

// GET all the Artists
app.get('/artists', (req, res) => {
    console.log('Retrieving artists...')
    const artists = getAllArtists();
    console.log('artists', artists);
    res.send(artists);
});

app.listen(port, () => console.log('Server is listening on port', port));