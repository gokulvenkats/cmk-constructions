import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  )
}