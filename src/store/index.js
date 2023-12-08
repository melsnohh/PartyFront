import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    partyList: [],
    currentParty: "",
    djSearchSelectedTrack: {
      artist: "",
      image_url: "",
      song_name: "",
      song_id: ""
    },
    djSuggestedSelectedTrack: {
      artist: "",
      image_url: "",
      song_name: "",
      song_id: "",
    },
    djPlaylistSelectedTrack: {
      artist: "",
      image_url: "",
      song_name: "",
      song_id: "",
    },
    selectedTrack: {
      artist: "",
      image_url: "",
      song_name: "",
      song_id: "",
    },
    guestSelectedSongForVote: {
      artist: "",
      image_url: "",
      song_name: "",
      song_id: "",
      vote: "",
    },
    createdParty: {
      partyName: "",
      description: "",
      passcode: "",
      city: "",
      startDate: "",
      startTime: "",
    },
    currentlyPlaying: {
      name: "",
      artist: "",
      is_playing: "",
      image_url: "",
    },
  

   

   

    
  },

  mutations: {
    SET_SELECTED_TRACK(state, data){

      state.selectedTrack.song_id = data.track_id;
      state.selectedTrack.song_name = data.name;
      state.selectedTrack.artist = data.artist;
      state.selectedTrack.image_url = data.image_url

    },

    SET_DJ_SEARCH_SELECTED_TRACK(state, data){

      state.djSearchSelectedTrack.song_id = data.track_id;
      state.djSearchSelectedTrack.song_name = data.name;
      state.djSearchSelectedTrack.artist = data.artist;
      state.djSearchSelectedTrack.image_url = data.image_url

    },

    SET_DJ_SUGGESTED_SELECTED_TRACK(state, data){

      state.djSuggestedSelectedTrack.song_id = data.song_id;
      state.djSuggestedSelectedTrack.song_name = data.song_name;
      state.djSuggestedSelectedTrack.artist = data.artist;
      state.djSuggestedSelectedTrack.image_url = data.image_url
    },


    SET_DJ_PLAYLIST_SELECTED_TRACK(state, data){
      state.djPlaylistSelectedTrack.song_id = data.track_id;
      state.djPlaylistSelectedTrack.song_name = data.name;
      state.djPlaylistSelectedTrack.artist = data.artist;
      state.djPlaylistSelectedTrack.image_url = data.image_url;
    },

    SET_CURRENT_PLAYING_SONG(state, data) {
      state.currentlyPlaying.name = data.name;
      state.currentlyPlaying.artist = data.artist;
      state.currentlyPlaying.is_playing = data.is_playing;
      state.currentlyPlaying.image_url = data.image_url;
    },

    SET_SUGGESTED_SELECTED_SONG_FOR_VOTE(state, data) {
      state.guestSelectedSongForVote.song_id = data.song_id;
      state.guestSelectedSongForVote.song_name = data.song_name;
      state.guestSelectedSongForVote.artist = data.artist;
      state.guestSelectedSongForVote.image_url = data.image_url;
      state.guestSelectedSongForVote.vote = data.vote;
    },

    ADD_TO_SUGGESTED_SONGS(state, data){
      state.suggestedSongs.push(data);
    },

    CREATE_PARTY(state, data){
      state.createdParty.partyName = data.partyName;
      state.createdParty.description = data.description;
      state.createdParty.passcode = data.passcode;
      state.createdParty.city = data.city;
      state.createdParty.startDate = data.startDate;
      state.createdParty.startTime = data.startTime;
    },

    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },

    SET_CURRENT_PARTY(state, data) {
      state.currentParty = data
    }
  }
})
