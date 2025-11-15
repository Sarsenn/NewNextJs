import { JSX } from "react/jsx-runtime";
import styles from "./layout.module.css"; // можно задавать классы
import { layouttProps } from "./Layout.props";
import cn from "classnames"; // подключаем библиотеку classnames
import { Header } from "./Header/Header";
import { Sidebar } from "./Siderbar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

const Layout = ({ children }: layouttProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>( // HOC для автоматического обертки страницы
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
