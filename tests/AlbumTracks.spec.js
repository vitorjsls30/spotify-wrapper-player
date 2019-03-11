import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumTracks from '../src/AlbumTracks';
import ConvertToHumanTime from '../src/ConvertToHumanTime';

describe('AlbumTracks', () => {
    const data = [{
        preview_url: 'https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Where The Streets Have No Name - Remastered',
        duration_ms: 33705
    }];

    const data2 = [{
        preview_url: 'https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Where The Streets Have No Name - Remastered',
        duration_ms: 33705
    },
    {
        preview_url: 'https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Where The Streets Have No Name - Remastered',
        duration_ms: 33705
    }];

    const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Where The Streets Have No Name - Remastered</p>
        <p class="music-duration">${ConvertToHumanTime(33705)}</p>
    </div>`;

    const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Where The Streets Have No Name - Remastered</p>
        <p class="music-duration">${ConvertToHumanTime(33705)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/0fb9672884b90210b8e58fa79fb1b90a8dbd9eff?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Where The Streets Have No Name - Remastered</p>
        <p class="music-duration">${ConvertToHumanTime(33705)}</p>
    </div>`;

    it('should creste and append the markup given a correct data', () => {
        const element = document.createElement('div');
        renderAlbumTracks(data, element);

        expect(element.innerHTML).to.be.eql(markup);
    });

    it('should create and append the markup gien a data with more than 1 item', () => {
        const element2 = document.createElement('div');
        renderAlbumTracks(data2, element2);

        expect(element2.innerHTML).to.be.eql(markup2);
    });
});
