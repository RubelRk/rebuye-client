// import { useEffect, useState } from "react";

// const useBuyer = (email) => {
//   const [isBuyer, setIsBuyer] = useState(false);
//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:4000/users/buyer/${email}`)
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
