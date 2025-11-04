const HomePage = () => {
  return (
    <section className="pt-12">
      <div className="h-[200px] w-full flex flex-row items-center justify-around p-6 rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
        <img src="/cart_dashboard.svg" alt="Home" className="w-1/3 ml-4" />
      </div>
      <div className="mt-4">
        <p>
          This is the home page of our e-commerce application. Here you can find
          various products and categories to explore.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
