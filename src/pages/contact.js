import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <div className="container max-w-4xl mx-auto pb-10 px-12 md:px-0">
        <div className="flex flex-wrap justify-start items-start -mx-4">
          <div className="w-full md:w-1/2 p-4">
            <form>
              <fieldset className="mb-4">
                <label className="block text-sm text-gray-dark pb-2">
                  Name
                </label>
                <input
                  className="block w-full border rounded py-2 px-3 text-sm text-gray-700"
                  type="text"
                />
                <p className="text-xs pt-2 text-gray">
                  This is some helper text...
                </p>
              </fieldset>

              <fieldset className="mb-4">
                <label className="block text-sm text-gray-dark pb-2">
                  Email
                </label>
                <input
                  className="block w-full border rounded py-2 px-3 text-sm text-gray-700"
                  type="text"
                />
              </fieldset>

              <fieldset className="mb-4">
                <label className="block text-sm text-gray-dark pb-2">
                  Message
                </label>
                <textarea className="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
                <p className="text-xs pt-2 text-red-400">
                  This field is required...
                </p>
              </fieldset>

              <button className="text-sm py-2 px-3 bg-black text-white rounded">
                Submit
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div className="overflow-hidden rounded border mb-6">
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106000.49300263195!2d151.1141413582031!3d-33.8763776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1547515706012"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>
            </div>

            <p className="text-black font-bold mb-1">CMK Construction</p>
            <p className="text-sm mb-2">
              3 St,
              <br />
              Salem,
              <br />
              TN 63606
            </p>

            <p className="text-black font-bold">(02) 9923 1838</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
