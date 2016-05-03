/* eslint-env mocha */
import { expect } from 'chai';

import * as PodcastReducers from '../../src/reducers/podcast';
import {
  RECEIVED_FILES,
  PLAYING_FILE,
  RESUME,
  PAUSE,
  STOP,
} from '../../src/actions/podcast_actions';

describe('podcast reducer', () => {
  it('should return default state', () => {
    const defaultState = PodcastReducers.podcast();

    expect(defaultState).to.deep.equal({
      status: 'Off',
    });
  });

  describe('playing', () => {
    it('should return empty state as default', () => {
      const defaultState = PodcastReducers.playing();

      expect(defaultState).to.deep.equal({});
    });

    it("should return empty state given 'STOP'", () => {
      const state = PodcastReducers.playing({}, { type: STOP });

      expect(state).to.deep.equal({});
    });

    it("should return file given 'PAYING_FILE'", () => {
      const state = PodcastReducers.playing({}, {
        type: PLAYING_FILE,
        file: { filename: 'some-file' },
      });

      expect(state).to.deep.equal({
        filename: 'some-file',
      });
    });
  });

  describe('status', () => {
    it("should return 'Off' as default", () => {
      const defaultState = PodcastReducers.status();

      expect(defaultState).to.equal('Off');
    });

    it("should return 'Playing' given 'PLAYING_FILE'", () => {
      const state = PodcastReducers.status('', { type: PLAYING_FILE });

      expect(state).to.equal('Playing');
    });

    it("should return 'Playing' given 'RESUME'", () => {
      const state = PodcastReducers.status('', { type: RESUME });

      expect(state).to.equal('Playing');
    });

    it("should return 'Paused' given 'PAUSE'", () => {
      const state = PodcastReducers.status('', { type: PAUSE });

      expect(state).to.equal('Paused');
    });

    it("should return 'Stopped' given 'STOP'", () => {
      const state = PodcastReducers.status('', { type: STOP });

      expect(state).to.equal('Stopped');
    });
  });

  describe('files', () => {
    it('should return empty list as default state', () => {
      const defaultState = PodcastReducers.files();

      expect(defaultState).to.deep.equal([]);
    });

    it("should return files given 'RECEIVED_FILES'", () => {
      const state = PodcastReducers.files([], {
        type: RECEIVED_FILES,
        files: [{
          filename: 'file1',
        }, {
          filename: 'file2',
        }],
      });

      expect(state).to.deep.equal([{
        filename: 'file1',
      }, {
        filename: 'file2',
      }]);
    });
  });
});
