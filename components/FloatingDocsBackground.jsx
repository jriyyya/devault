import { useRef } from "react";

export default function FloatingDocsBackground() {
  let canvas = useRef(null);

  useEffect(() => {
    let ctx = canvas.current.getContext("2d");
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }, []);

  return <canvas ref={canvas} className="w-full h-full" />;
}
