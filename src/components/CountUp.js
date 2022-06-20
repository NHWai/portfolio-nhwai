import React, { useState, useRef, useEffect } from "react";

function CountUp({ end, start, timer, delay }) {
  const [state, setState] = useState(0);

  const ref = useRef(start);
  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => isMounted && updateCounterState(), delay);

    return () => (isMounted = false);
  }, [end, start, timer, delay]);

  return <div style={{ display: "inline" }}>{state}</div>;
}

export default CountUp;
