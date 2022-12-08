// import { useEffect, useState } from "react";

// const useBuyer = (email) => {
//   const [isBuyer, setIsBuyer] = useState(false);
//   useEffect(() => {
//     if (email) {
//       fetch(`${process.env.REACT_APP_API}/users/buyer/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data.isSeller);
//           setIsBuyer(data.isSeller);
//         });
//     }
//   }, [email]);
//   return [isBuyer];
// };
// export default useBuyer;
