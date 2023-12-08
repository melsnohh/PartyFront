import axios from 'axios';
import router from '../router';

const http = axios.create({
    baseURL: `${process.env.VUE_APP_REMOTE_API}`
});

export default {

    getParty(partyId) {
        return http.get(`/party/${partyId}`);
    },

    postParty(createdParty, user) {

        const data = {
            party: createdParty,
            user_id: user.id
        }

        http.post("/party", data).then(response => {
            let responseStatus = response.status;
            if (responseStatus == 201 || responseStatus == 200) {
                console.log(response.data)
                router.push({ name: 'DJHomePage', params: { userName: user.username } })
            }
        })
    },

    searchSongs(search) {
        return http.get(`/search?term=${search}`);
    },

    getDjParties(userId) {
        return http.get(`/party/user/${userId}`)
    },

    addSongToSuggested(partyId, song){
       return http.post(`/party/${partyId}/suggested`, song)
    },

    getSuggestedSong(partyId){
        return http.get(`/party/${partyId}/suggested`)
    },
    
    getPlaylistTracks(partyId) {
        return http.get(`/party/${partyId}/playlist`)
    },

    resumePlay() {
        return http.put('/playlist/play');
    },

    pause() {
        return http.put('/playlist/pause');
    },

    nextSong() {
        return http.post('/playlist/next');
    },

    previousSong() {
        return http.post('/playlist/previous');
    },

    getCurrentlyPlaying() {
        return http.get('/playlist/currently-playing');
    },

    addSongToPlaylist(partyId, songId) {
        return http.post(`/party/${partyId}/playlist/track?id=${songId}`);
    },

    playSelectedSong(partyId, songId) {
        return http.put(`/party/${partyId}/playlist/play?id=${songId}`);
    },

    deleteSongFromPlaylist(partyId, songId) {
        http.delete(`/party/${partyId}/playlist/track?id=${songId}`)
    },

    deleteSongFromSuggestedList(partyId, songId) {
        http.delete(`/party/${partyId}/suggested?id=${songId}`)
        // return http.delete(`/party/${partyId}/playlist/track?id=${songId}`);
    },

    deleteParty(partyId) {
        http.delete(`/party/${partyId}`)
    },

    upVoteSong(partyId, songId) {
        return http.put(`/party/${partyId}/suggested/${songId}/upvote`)
    },

    downVoteSong(partyId, songId) {
        return http.put(`/party/${partyId}/suggested/${songId}/downvote`)
    }




}
