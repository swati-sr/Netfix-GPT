const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-9 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-white text-lg w-1/2 md:w-3/4 md:text-3xl md:pb-4 shadow-sm">
        {title}
      </h1>
      <p className="text-base text-white font-semibold hidden md:inline-block md:py-6 md:w-1/2">
        {overview}
      </p>
      <div className="flex mt-4 gap-5">
        <button className="text-black bg-white rounded-md py-1 px-4 md:px-8 font-bold text-base md:text-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button
          className="text-white bg-gray-600 rounded-md py-1 px-8
          font-bold text-lg hover:bg-opacity-50 hidden md:inline-block"
        >
          {" "}
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
