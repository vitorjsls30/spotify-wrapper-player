/* global document  */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('U2');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('5y6wlw1LnqFnQFruMeiwGU');
const albumInfo = document.getElementById('album-info');

const albumTracks = document.getElementById('album-tracks');

albums
    .then(data => renderAlbums(data.albums.items, albumList));

album
    .then((data) => {
        renderAlbumInfo(data, albumInfo);
        const tracks = [...data.tracks.items];
        renderAlbumTracks(tracks, albumTracks);
    });
