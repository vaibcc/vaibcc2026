import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 95, startDelay = 400 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) { clearInterval(timer); return c; }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => { clearTimeout(start); clearInterval(timer); };
  }, [text, speed, startDelay]);

  return (
    <span aria-label={text}>
      <span aria-hidden="true" className="text-gradient">{text.slice(0, count)}</span>
      <span aria-hidden="true" className="caret ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] bg-[#0078D4]" />
    </span>
  );
}