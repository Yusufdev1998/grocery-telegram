import TLoginBtn from "react-telegram-login";

interface Ires {
  id: number;
  first_name: string;
  photo_url: string;
  auth_date: string;
  hash: string;
}

const Login = () => {
  const authCB = (res: Ires) => {
    console.log(res);
  };
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <TLoginBtn dataOnauth={authCB} botName="groceryfn4bot"></TLoginBtn>
    </div>
  );
};

export default Login;
