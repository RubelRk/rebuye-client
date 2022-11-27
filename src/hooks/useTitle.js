import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - RebuyPhone`;
  }, [title]);
};

export default useTitle;
