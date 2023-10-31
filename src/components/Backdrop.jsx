import { Store } from "@/context/Context";

const Backdrop = () => {
  const { clicked, setClicked } = Store();
  const handleClick = () => {
    setClicked(false);
  };
  return (
    <section
      onClick={handleClick}
      className={`fixed top-0 left-0 h-screen w-full bg-gray-400 bg-opacity-70 z-48  ${
        clicked ? "block sm:hidden" : "hidden"
      }`}
    ></section>
  );
};

export default Backdrop;
