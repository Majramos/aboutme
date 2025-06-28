import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout title="Oops! 404">
      <section className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
        <h1 className="text-xl sm:text-3xl font-bold">404 - Page Not Found</h1>
      </section>
    </Layout>
  );
}
