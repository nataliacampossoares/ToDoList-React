import { useState } from "react";

export default function Task() {
  const [src, setSrc] = useState("./checkDefault.png");
  const [check, setCheck] = useState(false);
  const [colorText, setColorText] = useState("white");

  function handleClickCheck() {
    setSrc((prevSrc) =>
      prevSrc === "./checkDefault.png" ? "./check.png" : "./checkDefault.png"
    );
    setCheck((prev) => !prev);
    setColorText(prev => prev === "white" ? "gray" : "white");
  }

  return (
    <div className="bg-gray500 flex justify-between items-start p-4 border-r-8 rounded-lg w-[80%] max-w-3xl">
      <img src={src} onClick={handleClickCheck} />
      <p
        className="flex-1 mx-3"
        style={{ textDecoration: check ? "line-through" : "none", color: colorText }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
        perferendis. Veniam suscipit tenetur
      </p>
      <img src="./trash.png" />
    </div>
  );
}
