import { useEffect, useState } from "react";
// import Chart from "../chatComponents/musicPlayer/Chart";
import Chart from "../components/musicPlayerComponents/Chart";
import Titlebar from "../components/musicPlayerComponents/TitleBar";
import { genres } from "../data/musicGenres";


// swap hard coded genres
const ChartContainer = () => {
    const [songs, setSongs] = useState([]);

    const [musicGenres, setMusicGenres] = useState(genres);

    useEffect(() => {
        loadSongs(musicGenres[0].url)
    }, [musicGenres])

    const loadSongs = url => {
        fetch(url)
            .then(res => res.json())
            .then(songList => setSongs(songList.feed.entry))
            .catch(err => console.error);
    }

    const handleSelectChange = event => {
        loadSongs(event.target.value);
    }

    return (
        <div>
            <Titlebar
                handleSelectChange={handleSelectChange}
                musicGenres={musicGenres}
            />
            <Chart
                songs={songs}
                url={musicGenres[0].url}
                handleSelectChange={handleSelectChange}
                />
        </div>
    )
}

export default ChartContainer;

