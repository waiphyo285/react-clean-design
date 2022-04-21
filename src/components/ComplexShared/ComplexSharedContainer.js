import React, { useEffect, useState } from "react";
import ComplexSharedView from "./ComplexSharedView";

export function ComplexSharedContainer() {
  const [val, setVal] = useState("Complex Shared");
  useEffect(() => {
    // Perform all side-effects and business logic in this component.
    // Also event handlers can go here if suitable.
    setVal("Complex Shared Component");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <ComplexSharedView data={val} />
    </>
  );
}
