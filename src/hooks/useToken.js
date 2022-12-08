import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState();
  console.log(token);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
