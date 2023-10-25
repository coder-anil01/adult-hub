import axios from 'axios'
import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import LoadingBar from 'react-top-loading-bar'
import '../style/FilterCard.css'


const Home = () => {

  const newYear = new Date(new Date().getFullYear(), 0, 1); // January is month 0

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - newYear;

  // Convert milliseconds to days
  const daysCounted = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


  const [data, setData] = useState([]);
  const [page, setPage] = useState(daysCounted);
  const[query, setQuery] =useState('all');
  const [gay, setGay] = useState('0');
  const [quality, setquality] = useState('1');
  const [progress, setProgress] = useState(0)


    const apiLink = `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=80&page=${page}&thumbsize=big&order=top-weekly&gay=${gay}&lq=${quality}&format=json`
    useEffect(()=>{
    const getData = async()=>{
      setProgress(70)
      const response = await axios.get(apiLink)
        setData(response.data.videos)
        setProgress(100)
        console.log(response.data.videos)
    };
        getData();
      }, [apiLink]);

//=> PAGINATION
    const handlepre = ()=>{
      setPage(page-1)
      setData([])
      setProgress(30)
    }
    const handleNext = ()=>{
      setPage(page+1)
      setProgress(30)
      setData([])
      setProgress(30)
    }
//=> query
    const handleQuery = (e)=>{
      setQuery(e)
      // getData();
      setProgress(30)
    }
    const handleGay = (e)=>{
      setGay(e)
      // getData();
      setProgress(30)
    }
//=> quality
    const handleQuality =(e)=>{
      setquality(e)
      // getData();
      setProgress(30)
    }

  return (
    <div className='f-main-container'>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/>

      <div className="f-left-container">
        <div className="f-button-container">
          <div className='f-button-title'>CATEGORIES</div>
          <button className="f-l-button" onClick={()=>{handleQuery('all')}}>All</button>
          <button className="f-l-button" onClick={()=>{handleQuery('teens')}}>Teens</button>
          <button className="f-l-button" onClick={()=>{handleQuery('anal milf')}}>Anal milf</button>
        </div>
        <div className="f-button-container">
          <div className='f-button-title'>GENDER</div>
          <button className="f-l-button" onClick={()=>{handleGay('0')}}>Boys & Girl</button>
          <button className="f-l-button" onClick={()=>{handleGay('1')}}>All</button>
          <button className="f-l-button" onClick={()=>{handleGay('2')}}>Gay</button>
        </div>
        <div className="f-button-container">
          <div className='f-button-title'>QUILITY</div>
          <button className="f-l-button" onClick={()=>{handleQuality('1')}}>All</button>
          <button className="f-l-button" onClick={()=>{handleQuality('2')}}>Low Quality</button>
          <button className="f-l-button" onClick={()=>{handleQuality('0')}}>High Quality</button>
        </div>
      </div>
      <div className="f-right-container">
        {data && <VideoCard data={data}/>}
      <div className="f-pre_next">
        <button className="f-pre_next-b"disabled={page<=1} onClick={handlepre}>⬅ previous</button>
        <div className='f-active-page'>{page}</div>
        <button className="f-pre_next-b" onClick={handleNext}>next ➢</button>
      </div>
      </div>
    </div>
  )
}

export default Home
