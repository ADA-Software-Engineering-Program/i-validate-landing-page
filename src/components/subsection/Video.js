import Srcvideo from '../../images/WhatsApp Video 2023-02-27 at 9.44.47 PM.mp4'




const Video = () => {
    return(
        <div className="ratio ratio-16x9 ">
            <iframe src={Srcvideo} title="ivalidate video" allowFullScreen ></iframe>
        </div>
    )
  }
  export default Video