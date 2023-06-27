import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((b) => {
      return b + 1;
    });
  }

  useEffect(function () {
    /* kaže što se postvlja kad se pokaže komponenta, prvi parametar je koja fukcija, drugi komponenta */
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Daj savjet</button>
      {/* <p>
         Pročitali ste <strong>{count}</strong> savjeta.
      </p>
     */}
      <Message p_count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      Pročitali ste <strong>{props.p_count}</strong> savjeta.
    </p>
  );
}
