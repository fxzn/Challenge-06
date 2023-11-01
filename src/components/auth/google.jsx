import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { registerLoginWithGoogle } from "../../redux/actions/authActions";

function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <div className="d-flex justify-content-center">
      <GoogleButton label="Login with Google" className="w-40" onClick={() => loginWithGoogle()}></GoogleButton>
    </div>
  );
}

export default GoogleLogin;