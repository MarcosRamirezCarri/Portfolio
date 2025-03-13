import NavBar from "../components/Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
}
