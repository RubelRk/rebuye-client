import { useEffect, useState } from "react";

const useAllSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isVerify, setIsVerify] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setIsVerify(data.isVerify);
        });
    }
  }, [email]);
  return [isSeller, isVerify];
};
export default useAllSeller;
