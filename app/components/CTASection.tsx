import Link from "next/link";

function CTASection() {
  return (
    <div>
      {/* CTA Section Background */}
      <div style={{ position: "relative", height: "0px" }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('/images/home/office-workers-eating-salad-in-the-office.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
      </div>

      {/* CTA Section */}
      <div>
        <section className="py-32 bg-[#0B0C13D4] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10">
              We Always Take Care Of Our Clients Seriously
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-[#60a8f3] hover:-translate-y-2 duration-300 text-white px-10 py-4 font-extrabold rounded-xs hover:bg-opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CTASection;
