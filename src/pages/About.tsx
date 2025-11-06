import { useRef, useState } from "react";
import Search from "../components/Search";
import { useAppSelector } from "../store/hooks";

const AboutPage = () => {
  const parentRef = useRef<any>(null);
  const user = useAppSelector((state) => state.user);

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    throw new Error("Count exceeded the limit of 5");
  }

  return (
    <section className="pt-12">
      <h1 className="text-2xl font-bold">About Us</h1>

      <Search ref={parentRef} onChange={() => {}} />
      <p className="mt-4">
        We are a leading e-commerce platform offering a wide range of products
        to cater to your needs.
      </p>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => {
            console.log("Focus button clicked", parentRef.current);
            parentRef.current?.myFocus();
          }}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Focus
        </button>

        <button
          onClick={() => {
            console.log("SetValue button clicked", parentRef.current);
            parentRef.current?.setValue("Mahesh");
          }}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Set Value
        </button>

        <div>{count > 5 ? <span>Reached maximum limit</span> : count}</div>

        <button
          onClick={incrementCount}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        >
          Increment Count ({count})
        </button>
      </div>
      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(user, null, 2)}
      </pre>
    </section>
  );
};

export default AboutPage;
