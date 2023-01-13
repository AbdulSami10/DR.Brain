import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegForm from "../components/regForm";
import RegisterSucces from "../components/registerSucces";
const Registration = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/login");
    }
    // localStorage.getItem("live") ? navigate("/live") : navigate("/");
  }, [navigate]);

  return (
    <React.Fragment>
      {localStorage.getItem("live") ? <RegisterSucces /> : <RegForm />}
    </React.Fragment>
  );
};

export default Registration;