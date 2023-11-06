import { useRouter } from "next/router";

const SudsChoice = "./images/Suds/SudsChoice.png";
const TireChoice = "./images/Tires/TireChoice.png";
const CityBg = "./images/skyline.png";

export default function Choice() {
  const router = useRouter();

  // Function to handle click and navigate
  const handleClick = (url) => {
    router.push(url);
  };

  // Custom style for the hover effect
  const hoverStyle = {
    transition: 'transform 0.3s ease', // Smooth transition for the transform
    boxShadow: '0 0 15px 5px rgba(59, 130, 246, 0.5)', // Box shadow for glow effect
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${CityBg})`,
          filter: 'blur(8px)', // Apply blur effect to the background image
        }}
      />
      {/* Content container to overlay on the blurred background */}
      <div className="relative flex flex-col items-center justify-center w-full h-full lg:flex-row">
        <div
          className="card rounded-box place-items-center cursor-pointer hover:scale-105 mx-4"
          style={{
            backgroundImage: `url(${SudsChoice})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "40vw",
            height: "60vh",
            display: "grid",
            ...hoverStyle,
          }}
          onClick={() => handleClick("/suds&duds")}
        ></div>
        <div className="divider divider-horizontal lg:divider-vertical self-center">
        {' '} {" "}
        </div>
        <div
          className="card rounded-box place-items-center cursor-pointer hover:scale-105 mx-4"
          style={{
            backgroundImage: `url(${TireChoice})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "40vw",
            height: "60vh",
            display: "grid",
            ...hoverStyle,
            boxShadow: '0 0 15px 5px rgba(34, 197, 94, 0.5)', // Tailwind's green-500 color with opacity for glow
          }}
          onClick={() => handleClick("/vi-go-tire")}
        ></div>
      </div>
    </div>
  );
}
