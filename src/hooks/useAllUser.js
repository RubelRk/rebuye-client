import { useEffect, useState } from "react";

const useAllSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  // console.log("outside ", isVerify);
  useEffect(() => {
    if (email) {
      // fetch(`${process.env.REACT_APP_API}/users/seller/${email}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setIsSeller(data.isSeller);
      //     setIsVerify(data.isVerify);
      //     console.log("useEffect ", data.isVerify);
      //   });
      const fetchData = async () => {
        const res = await fetch(
          `${process.env.REACT_APP_API}/users/seller/${email}`
        );
        const data = await res.json();
        setIsSeller(data.isSeller);
        setIsVerify(data.isVerify);
        // console.log("useEffect ", data.isVerify);
      };
      fetchData().catch(console.error);
    }
  }, [email]);
  // console.log("return ", isVerify);
  return [isSeller, isVerify];
};
export default useAllSeller;
