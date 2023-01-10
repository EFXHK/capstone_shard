

function Song({title, artist, position, image, audio}) {

    const [isPlaying, setIsPlaying] = useState(null)
    const audioSrc = useRef(null)

    const altTag = `${title} by ${artist}`;

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }
}

useEffect(() => {
    //skip play on mount?
    if (isPlaying === null) return
    isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
}, [isPlaying])


