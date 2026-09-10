"use client";

const videoSource = "/Livebg/vidssave.com%20Mythical%20Glory%20to%20Mythical%20Immortal%20Rank%20Animation%20(New%20Update%20S31)%20-%20Mobile%20Legends%20Bang%20Bang%201080P.mp4";

export default function BackgroundVideo() {
  return (
    <video
      className="dashboard-video"
      autoPlay
      muted
      loop
      playsInline
      onLoadedMetadata={(event) => {
        event.currentTarget.currentTime = 10;
      }}
      onTimeUpdate={(event) => {
        if (event.currentTarget.currentTime >= 36) {
          event.currentTarget.currentTime = 10;
        }
      }}
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  );
}