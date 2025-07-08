import { clsx } from 'clsx';
import { useState, useEffect, useRef } from 'react';

function getEmbedUrl(url) {
  // Si es un video de YouTube, agrega controls=0 y autoplay=1
  if (url.includes('youtube.com/embed')) {
    let base = url;
    let sep = url.includes('?') ? '&' : '?';
    return `${base}${sep}controls=0&autoplay=1`;
  }
  return url;
}

function isLocalVideo(url) {
  return url.match(/\.(mp4)$/i);
}

function isImage(url) {
  return url.match(/\.(jpg|jpeg|png|gif)$/i);
}

export default function Carousel({ items, autoAdvanceMs, styleContainer = 'w-screen h-screen', indicators = true }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    if (!autoAdvanceMs) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, autoAdvanceMs);
    return () => clearInterval(intervalRef.current);
  }, [autoAdvanceMs, items.length]);

  const renderItem = (url, index) => {
    if (isLocalVideo(url)) {
      return (
        <video
          key={index}
          src={url}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      );
    } else if (isImage(url)) {
      return (
        <img
          key={index}
          src={url}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      );
    } else {
      return (
        <iframe
          key={index}
          src={getEmbedUrl(url)}
          title={`Video ${index + 1}`}
          className="w-full h-full object-cover"
          allowFullScreen
          frameBorder="0"
        />
      );
    }
  };

  return (
    <div className={clsx("flex items-center justify-center bg-black relative overflow-hidden", styleContainer)}>
      {renderItem(items[current], current)}
      {indicators && (
        <div className="z-10 absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, idx) => (
            <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
      )}
    </div>
  );
} 