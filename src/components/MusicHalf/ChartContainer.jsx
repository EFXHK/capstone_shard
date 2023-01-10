import { useEffect, useState } from "react";
import Chart from "./Chart";
import Titlebar from "./TitleBar";
import { genres } from "../../data/musicGenres";


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
        <>
            <Titlebar
                handleSelectChange={handleSelectChange}
                musicGenres={musicGenres}
            />
            <Chart
                songs={songs}
                url={musicGenres[0].url}
                handleSelectChange={handleSelectChange}
                />
        </>
    )
}

export default ChartContainer;

