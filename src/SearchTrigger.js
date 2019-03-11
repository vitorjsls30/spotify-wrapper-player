/* global document  */
import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albumList = document.getElementById('album-list');
const seacrhInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        spotify.search.albums(seacrhInput.value)
            .then(data => renderAlbums(data.albums.items, albumList));
    });
}