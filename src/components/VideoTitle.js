const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-9 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-white text-3xl pb-4 shadow-sm">{title}</h1>
      <p className="text-base text-white font-semibold py-6 w-1/4">
        {overview}
      </p>
      <div className="flex mt-4 gap-5">
        <button className="text-black bg-white  rounded-md py-1 px-8 font-bold text-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button
          className="text-white bg-gray-600 rounded-md py-1 px-8
          font-bold text-lg hover:bg-opacity-50"
        >
          {" "}
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
