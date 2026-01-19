"use client";

type FormField = {
  id: number;
  type: "text" | "email" | "textarea";
  name: string;
  placeholder: string;
  rows?: number;
};

const formFields: FormField[] = [
  {
    id: 1,
    type: "text",
    name: "name",
    placeholder: "Name",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    id: 3,
    type: "text",
    name: "subject",
    placeholder: "Subject",
  },
  {
    id: 4,
    type: "textarea",
    name: "message",
    placeholder: "Message",
    rows: 4,
  },
];

export default function ContactSection() {
  return (
    <section
      className="relative w-full py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/contact.png')" }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0"></div>

      <div className="relative container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

          {/* RIGHT ALIGNED FORM */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[var(--white)] w-full max-w-lg p-10 lg:p-12 shadow-2xl">

              {/* HEADING */}
              <h2 className="text-3xl font-semibold mb-8 text-[var(--header-text)]">
                Have questions? <br /> Get in touch!
              </h2>

              {/* FORM */}
              <form className="space-y-5">

                {/* DYNAMIC FIELDS */}
                {formFields.map((field) =>
                  field.type === "textarea" ? (
                    <textarea
                      key={field.id}
                      name={field.name}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      className="
                        w-full border border-[#E5E7DE]
                        px-4 py-3 text-sm outline-none resize-none
                        placeholder:text-[#ACAFB2]
                        focus:border-[var(--brand-blue)]
                      "
                    />
                  ) : (
                    <input
                      key={field.id}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="
                        w-full border border-[#E5E7DE]
                        px-4 py-3 text-sm outline-none
                        placeholder:text-[#ACAFB2]
                        focus:border-[var(--brand-blue)]
                      "
                    />
                  )
                )}

                {/* CHECKBOX */}
                <label className="flex items-start gap-2 text-sm text-[#ACAFB2]">
                  <input
                    type="checkbox"
                    className="mt-1 border border-[#E5E7DE] accent-[var(--brand-blue)]"
                  />
                  <span>
                    I agree that my submitted data is being{" "}
                    <span className="text-[var(--brand-blue)] font-medium">
                      collected and stored
                    </span>
                    .
                  </span>
                </label>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[var(--brand-blue)] text-[var(--white)] py-3 font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
