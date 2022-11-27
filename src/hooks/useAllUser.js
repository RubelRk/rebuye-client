import { useEffect, useState } from "react";

const useAllUser = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
        });
    }
  }, [email]);
  return [isSeller];
};
export default useAllUser;
