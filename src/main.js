/* global document  */
import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchEnterTrigger from './SearchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum('5y6wlw1LnqFnQFruMeiwGU');
const albumInfo = document.getElementById('album-info');

const albumTracks = document.getElementById('album-tracks');

album
    .then((data) => {
        renderAlbumInfo(data, albumInfo);
        const tracks = [...data.tracks.items];
        renderAlbumTracks(tracks, albumTracks);
    });
