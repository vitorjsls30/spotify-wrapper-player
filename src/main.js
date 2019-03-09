/* global document  */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('U2');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('5y6wlw1LnqFnQFruMeiwGU');
const albumInfo = document.getElementById('album-info');

albums
    .then(data => renderAlbums(data.albums.items, albumList));

album
    .then(data => renderAlbumInfo(data, albumInfo));
