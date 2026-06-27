"use client";

import { useState, useEffect } from "react";

export function useTyping(words: string[], speed = 80, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(words[index].substring(0, subIndex));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return text;
}
