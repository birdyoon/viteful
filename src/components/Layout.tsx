import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useChangeSeoHead from "../hooks/useChangeSeoHead";

// const mapPathToSeo: { [key: string]: { title: string; description: string } } =
//   {
//     "/": {
//       title: "홈페이지",
//       description: "홈페이지입니다.",
//     },
//   };

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = (props) => {
  const navigate = useNavigate();
  //   const location = useLocation();
  useChangeSeoHead();
  const { children } = props;
  return (
    <>
      {/* <Helmet>
        <title>{`여기는 ${location.pathname}`}</title>
      </Helmet>*/}
      <nav>
        <button onClick={() => navigate("/")}>main</button>
        <button onClick={() => navigate("/home")}>home</button>
        <button onClick={() => navigate("/profile")}>profile</button>
      </nav>
      {children}
    </>
  );
};

export default Layout;
