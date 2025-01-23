import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// const mapPathToSeo: { [key: string]: { title: string; description: string } } =
//   {
//     "/": {
//       title: "홈페이지",
//       description: "홈페이지입니다.",
//     },
//   };

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = (props) => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  const { children } = props;
  return (
    <>
      {/* <Helmet>
        <title>{`여기는 ${location.pathname}`}</title>
      </Helmet>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => navigate("/profile")}>profile</button>
      <Outlet /> */}
      {children}
    </>
  );
};

export default Layout;
