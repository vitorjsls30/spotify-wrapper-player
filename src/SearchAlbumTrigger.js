/* global document  */
import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
    spotify.album.getAlbum(albumId)
        .then((data) => {
            renderAlbumInfo(data, albumInfo);
            const tracks = [...data.tracks.items];
            renderAlbumTracks(tracks, albumTracks);
        });
}

export default function searchAlbumTrigger() {
    listAlbums.addEventListener('click', (e) => {
        const target = { ...e.target };
        makeRequest(target.getAttribute('data-album-id'));
    });
}
