import { Navbar } from "./navbar";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[75vh]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79%2F67ebd8ec1c22c00e03e69765__Hero-Desktop%20%281%29-transcode.mp4"
          className="w-full h-full object-cover object-[center_20%]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Navbar />
      <div className="relative text-white w-auto top-6">
        <div className="mx-60 w-[40vw] space-x-10">
          <h1 className="text-6xl font-extrabold">
            Create your best content yet.
          </h1>
          <p className="p-3 font-bold">
            Your online studio to record in high quality, edit in a flash, and
            go live with a bang. Not necessarily in that order. What would you
            like to start creating?
          </p>
        </div>
        <div>
          <p>What would you like to start creating?</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};
