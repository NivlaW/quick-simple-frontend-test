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
  return <>welowelo</>;
}
