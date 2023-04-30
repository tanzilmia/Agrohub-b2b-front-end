import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - AgroHub`;
    } else {
      document.title = `AgroHub`;
    }
  }, [title]);
};

export default useTitle;
