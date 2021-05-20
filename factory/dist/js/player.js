class VideoClient {

    players = [];

    constructor (videoIndex, vimeoID, width, height) {
        this.videoIndex = videoIndex;
        this.vimeoID = vimeoID;

        console.log(this.vimeoID);

        options = {
            controls: false,
            id: this.vimeoID != null ? this.vimeoID : vimeoID,
            autoplay: true,
            width: width,
            height: height
        }

        this.player = new Vimeo.Player(players[videoIndex], options);

        if (this.player.paused)
            this.player.play();
    }

    Pause() {
        this.player.pause();
    }

    Play() {
        this.player.play();
    }

    Init() {
        this.player.setVolume(0);
        this.player.disableTextTrack();
        this.player.setQuality('360p');
    }

    SetCurrentTime(time) {
        this.player.setCurrentTime(time);
        this.Pause();
    }

    GetCurrentTime() {
        return this.player.getCurrentTime();
    }
}