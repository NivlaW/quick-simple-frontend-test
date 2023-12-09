import { useEffect, useState } from "react";

export default function TaskOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const inAwait = async () => {
    var load = true;

    setIsLoading(load);
  };
  useEffect(() => {
    inAwait();
  }, []);
  return (
    <>
      <div className="sticky flex justify-end content-end m-5">
        <div className="flex p-3 w-1/3 h-[50dvh] bg-white rounded-md text-black">
          welowelo
        </div>
      </div>
    </>
  );
}
