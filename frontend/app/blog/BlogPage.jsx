import Image from "next/image";
import Hero from "../components/Hero";

const articles = [
    {
      title:
        "HARO Link Building Service: How We Land BIG Links for SEO Clients",
      read: "10 min read",
      image: "/card1.PNG",
    },
    {
      title: "Link Building Pricing: What Does It Cost in 2025?",
      read: "14 min read",
      image: "/card2.PNG",
    },
    {
      title: "Buy Backlinks The Right Way in 2025 [Essential Guide]",
      read: "17 min read",
      image: "/card3.PNG",
    },
    {
      title: "Landing High Authority Backlinks in 2025",
      read: "12 min read",
      image: "/card4.PNG",
    },
    {
        title:
          "HARO Link Building Service: How We Land BIG Links for SEO Clients",
        read: "10 min read",
        image: "/card5.PNG",
      },
      {
        title: "Link Building Pricing: What Does It Cost in 2025?",
        read: "14 min read",
        image: "/card6.PNG",
      },
      {
        title: "Buy Backlinks The Right Way in 2025 [Essential Guide]",
        read: "17 min read",
        image: "/card7.PNG",
      },
      {
        title: "Landing High Authority Backlinks in 2025",
        read: "12 min read",
        image: "/card8.PNG",
      },
  ];
  
const BlogPage = () => {
    return (
      <main className="min-h-screen bg-white px-4 md:px-12 py-8">
        {/* Blog Header */}
        <section className="text-center mt-12 mb-16">
          <h1 className="text-4xl font-bold mb-4">
            The{" "}
            <span className="bg-blue-800 px-3 py-1 rounded-lg text-white">
              Ultimate
            </span>{" "}
            Link Building Blog
          </h1>
          <p className="text-lg text-gray-700">
            Expand your{" "}
            <strong className="font-bold">link-building knowledge</strong> with
            our in-depth insights and analysis.
          </p>
        </section>
  
        {/* Popular Articles */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title:
                  "HARO Link Building Service: How We Land BIG Links for SEO Clients",
                read: "10 min read",
              },
              {
                title: "Link Building Pricing: What Does It Cost in 2025?",
                read: "14 min read",
              },
              {
                title: "Buy Backlinks The Right Way in 2025 [Essential Guide]",
                read: "17 min read",
              },
              {
                title: "Landing High Authority Backlinks in 2025",
                read: "12 min read",
              },
            ].map((article, index, arr) => (
              <div
                key={index}
                className={`pr-4 ${
                  index !== arr.length - 1 ? "border-r" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-4 leading-snug">
                  {article.title}
                </h3>
                <span className="inline-block border px-4 py-2 rounded-full text-sm">
                  {article.read}
                </span>
              </div>
            ))}
          </div>
        </section>
         {/* Filter Bar */}
         <section className="bg-blue-800 text-white rounded-full py-12  px-6">
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-2xl font-bold mr-4">Filter by</span>
            {[
              "View all",
              "Thought Leadership",
              "Strategy",
              "Services",
              "Niches",
            ].map((label, i) => (
              <button
                key={i}
                className="border border-white rounded-full px-6 py-3 text-lg hover:bg-black hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </div>
          
        </section>
    {/* Popular Articles */}
    <section>
        <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {articles.map((article, index) => (
            <div key={index} className="max-w-sm w-full flex flex-col gap-4">
              <div className="rounded-[40px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold leading-snug">
                {article.title}
              </h3>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm w-fit font-medium">
                {article.read}
              </span>
            </div>
          ))}
        </div>
      </section>
       <Hero />
      </main>
    );
  };
  
  export default BlogPage;
  