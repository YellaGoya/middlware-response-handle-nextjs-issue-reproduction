/** Add your relevant code here for the issue to reproduce */
"use client";

import { foo } from "./_action";

export default function Home() {
  const sendForm = async () => {
    const data = new FormData();

    data.append("foo", "bar");

    try {
      const result = await foo(data); // this will be blocked by middleware
      console.log(result); // undefined, expected message or something
    } catch (e) {
      console.error(e); // no error
    }
  };

  return <button onClick={sendForm}>Send it</button>;
}