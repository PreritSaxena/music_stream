import { createContext, useEffect, useRef, useState } from "react";
 
import axios from 'axios'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    // console.log(audioRef)
    const seekBg = useRef()
    const seekBar = useRef()

    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }

    const url = 'http://localhost:4000';

     

    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const [songsData ,setSongsData] = useState([])
    const [albumsData ,setAlbumsData] = useState([])
    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time , setTime]  = useState({
        currentTime : {
            second: 0,
            minute: 0
        },

        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const previous = async() => {
        songsData.map(async(item,index) => {
            if(item._id === track._id && index >0){
                await setTrack(songsData[index-1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        }   )
    }

    const next = async() => {
        songsData.map(async(item,index) => {
            if(item._id === track._id && index < songsData.length-1 ){
                await setTrack(songsData[index+1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        }   )
    }

    const playWithId =async (id) => {
        await songsData.map((item) => {
            if(item._id === id){
                setTrack(item)
               
            }
        
        })
        audioRef.current.play()
        setPlayStatus(true)
    }

    const suffle = async() => {
        let randomId = Math.floor(Math.random() * songsData.length)
        await setTrack(songsData[randomId])
        await audioRef.current.play()
        setPlayStatus(true)    
    }

    const seekSong= async(e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration
        // console.log(e)
    }

    const getSongsData = async() => {
        try{
            const response = await axios.get(`${url}/api/song/list`);
            setSongsData(response.data.songs)
            setTrack(response.data.songs[0])
        }
        catch(err){

        }   
    }
    const getAlbumsData = async() => {
        try{
            const response = await axios.get(`${url}/api/album/list`);
            setAlbumsData(response.data.albums)
            
        }
        catch(err){

        }
    }


    useEffect(() =>{

        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`
                setTime({
                    currentTime : {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
            
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)  
                    }
                })
            }

        },1000)
       
    },[audioRef])

    useEffect(()=>{
        getSongsData();
        getAlbumsData();
    },[])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,playWithId,
        previous,
        next,suffle,seekSong,
        songsData,
        albumsData

    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;