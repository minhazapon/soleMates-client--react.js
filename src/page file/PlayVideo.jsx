


const PlayVideo = () => {

    return (
        <div className=" mt-20 mb-10">

            <div className=' '>
                 <video className=" h-full w-full " controls>
             <source  
             src="https://assets.mixkit.co/videos/43509/43509-720.mp4" 
             type="video/mp4" />
             Your browser does not support the video tag.
           </video>
          </div>
            
        </div>
    );
};

export default PlayVideo;