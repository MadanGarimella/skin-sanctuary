import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import { treatments } from "../data/treatments";

const times = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "3:30 PM",
  "5:00 PM",
  "6:30 PM",
];

const Booking = () => {

  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );

  const [selectedTime, setSelectedTime] = useState(times[1]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: treatments[0]?.title || "",
    concern: "",
  });



  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDate = selectedDate.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const message = `
*Appointment Request*

Hello Skin Scanctuary,

Please let me know if the following appointment slot is available.

Patient Name: ${formData.name}
Phone Number: ${formData.phone}
Email Address: ${formData.email || "Not Provided"}

Treatment Required: ${formData.treatment}

Preferred Appointment Date: ${formattedDate}
Preferred Appointment Time: ${selectedTime}

Concern:
${formData.concern}

I look forward to your confirmation.

Thank you.
`;

    // Replace with clinic WhatsApp number
    const whatsappNumber = "916305953316";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <SEO
        title="Book Appointment"
        description="Book a dermatology, hair, laser, or aesthetic consultation at Skin Scanctuary."
        path="/book-appointment"
      />

      <PageHero
        eyebrow="Book Appointment"
        title="Schedule your consultation in a few simple steps"
        description="Choose a preferred date and time, share your concern, and our clinic team will confirm availability."
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Appointment Summary */}
          <aside className="rounded-3xl bg-light p-7">
            <h2 className="text-2xl font-bold text-dark">
              Appointment Summary
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <FaCalendarAlt className="text-primary" />
                {selectedDate.toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>

              <p className="flex items-center gap-3">
                <FaClock className="text-primary" />
                {selectedTime}
              </p>

              <p className="flex items-center gap-3">
                <FaUser className="text-primary" />
                Dermatology Consultation
              </p>
            </div>

           
          </aside>

          {/* Booking Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_14px_45px_rgba(0,0,0,0.06)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Date Selection */}
              <div>
                <h2 className="text-2xl font-bold text-dark">
                  Select Appointment Date
                </h2>

                <div className="mt-5">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Choose a date"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-primary"
                    calendarClassName="rounded-2xl border border-gray-100 shadow-xl"
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h2 className="text-2xl font-bold text-dark">
                  Select Time Slot
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-2xl border px-5 py-4 font-medium transition-all ${selectedTime === time
                        ? "border-primary bg-primary text-white shadow-lg"
                        : "border-gray-200 bg-white text-gray-700 hover:border-primary hover:shadow-md"
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Details */}
              <div>
                <h2 className="text-2xl font-bold text-dark">
                  Patient Details
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                  />

                  <input
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                  />

                  <select
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        treatment: e.target.value,
                      })
                    }
                    className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                  >
                    {treatments.map((item) => (
                      <option
                        key={item.slug}
                        value={item.title}
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  required
                  placeholder="Tell us briefly about your concern"
                  value={formData.concern}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      concern: e.target.value,
                    })
                  }
                  className="mt-4 h-32 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all hover:bg-green-700"
              >
                <FaWhatsapp size={20} />
                Request Appointment on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;