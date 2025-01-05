import React from 'react';
import Typed from 'typed.js';

export default function TypedComponent({text}:{text:string}) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="info-tooltip">
      <span ref={el} />
    </div>
  );
}