

function Song({title, artist, position, image, audio}) {

    const [isPlaying, setIsPlaying] = useState(null)
    const audioSrc = useRef(null)

    const altTag = `${title} by ${artist}`;

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }
}

