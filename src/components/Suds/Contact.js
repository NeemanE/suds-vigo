export default function Contact() {
  return (
    <section className="bg-blue-400 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Have any questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4 text-gray-600">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <p>
              <strong>Address:</strong> 1234 Street, City, Country
            </p>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> (340) 692-9274
            </p>
          </div>
          <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 md:mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <input
                  className="input input-bordered w-full"
                  id="grid-first-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="input input-bordered w-full"
                  id="grid-email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  id="grid-message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3 text-right">
                <button className="btn btn-secondary" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
