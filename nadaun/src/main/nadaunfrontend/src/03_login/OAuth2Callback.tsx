import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuth2Callback: React.FC = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      let token: string | null = new URLSearchParams(window.location.search).get("token");
  
      console.log("URL token:", token);
  
      // 없으면 localStorage에서 가져오기
      if (!token) {
        token = localStorage.getItem("accessToken");  
      }
  
      console.log("Final token:", token);
  
      if (token) {
        localStorage.setItem("accessToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
        navigate("/agree", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    }, [navigate]);
  
    return <div>소셜 로그인 처리 중입니다...</div>;
  };
  
  export default OAuth2Callback;
  