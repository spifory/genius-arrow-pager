const isSongPage = !!document.querySelector("[class^=AlbumTracklist]");

const getNextUrl = (songs, prev) => {
	const currentIndex = songs.indexOf(window.location.pathname);
	const nextTrack = songs[prev ? currentIndex - 1 : currentIndex + 1];

	if (nextTrack) {
		window.location.pathname = nextTrack;
	} else {
		alert("No track comes before or after this");
	}
};

document.addEventListener("keydown", (event) => {
	if (isSongPage) {
		const songs = [];
		const tracklist = document.querySelectorAll(
			"[class^=AlbumTracklist__TrackName]",
		);

		for (const track of tracklist) {
			songs.push(
				track.querySelector("[class^=StyledLink]")
					? track.querySelector("[class^=StyledLink]").pathname
					: window.location.pathname,
			);
		}

		switch (event.key) {
			case "ArrowRight":
			case "ArrowLeft":
				getNextUrl(songs, event.key === "ArrowLeft");
				break;
			default:
				return;
		}
	}
});
