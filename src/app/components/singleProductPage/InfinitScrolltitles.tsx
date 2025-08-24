"use client";
import { useEffect, useRef } from "react";

interface ScrollingTextProps {
  items: string[];
}

export default function ScrollingText({ items }: ScrollingTextProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const restartAnimation = () => {
      list.style.animation = "none";
      setTimeout(() => {
        list.style.animation = "scroll 12s infinite";
      }, 10);
    };

    list.addEventListener("animationiteration", restartAnimation);

    return () => {
      list.removeEventListener("animationiteration", restartAnimation);
    };
  }, []);

  return (
    <div className="scrolling-text-container">
      <ul className="scrolling-text" ref={listRef}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <style jsx>{`
        .scrolling-text-container {
          width: 100%;
          max-width: 400px;
          height: 40px;
          overflow: hidden;
          position: relative;
          background-color: #f9f9f9;
          border-radius: 5px;
          padding: 5px;
          margin: 20px 0;
        }

        .scrolling-text {
          list-style: none;
          padding: 0;
          margin: 0;
          animation: scroll 12s infinite;
        }

        .scrolling-text li {
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
          color: #333;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          16.67% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-30px);
          }
          41.67% {
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(-60px);
          }
          66.67% {
            transform: translateY(-60px);
          }
          75% {
            transform: translateY(-90px);
          }
          91.67% {
            transform: translateY(-90px);
          }
          100% {
            transform: translateY(-90px);
          }
        }
      `}</style>
    </div>
  );
}
