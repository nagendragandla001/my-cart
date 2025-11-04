import { forwardRef, useImperativeHandle, useRef } from "react";

const Search = forwardRef((props: any, ref: any) => {
  const childRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    myFocus: () => {
      childRef.current?.focus();
    },
    setValue: (value: string) => {
      if (childRef.current) {
        childRef.current.value = value;
      }
    },
  }));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        ref={childRef}
        className="border p-2 rounded w-full"
      />
    </div>
  );
});

export default Search;
