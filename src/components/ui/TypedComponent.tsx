import React from 'react';
import Typed from 'typed.js';

export default function TypedComponent(props) {
  const { text } = props;
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
    <div className="info">
      <span ref={el} />
    </div>
  );
}