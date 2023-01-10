import { useEffect } from "react";
import Chart from "./Chart";
import Titlebar from "./TitleBar";


// swap hard coded genres
const ChartContainer = ({ genres }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        loadSongs(genres[0].url)
    }, [genres])

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
                genres={genres}
            />
            <Chart
                songs={songs}
                url={genres[0].url}
                handleSelectChange={handleSelectChange}
                />
        </>
    )
}

export default ChartContainer;

