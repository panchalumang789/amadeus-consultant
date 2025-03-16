"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white text-black p-8 rounded-lg"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px 0px" }}
    >
      <div className="py-2 border-b border-gray-200">
        <p className="text-xl font-semibold">Your Details</p>
        <p className="text-gray-500 text-sm font-light">
          Let us know how to get back to you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        <div>
          <label className="block text-black text-lg">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            placeholder="Anderson"
          />
          {errors.firstName && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.firstName.message}
            </p>
          )}
          <span className="italic text-xs text-gray-400">
            Enter your first name here
          </span>
        </div>

        <div>
          <label className="block text-black text-lg">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            placeholder="Mikko"
          />
          {errors.lastName && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.lastName.message}
            </p>
          )}
          <span className="italic text-xs text-gray-400">
            Enter your last name here
          </span>
        </div>

        <div>
          <label className="block text-black text-lg">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
            placeholder="Example: user@website.com"
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-black text-lg">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9-+()]*$/,
                message: "Invalid Contact Number",
              },
            })}
            className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            type="tel"
            placeholder="Example: 9876543210"
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="py-2 border-b border-gray-200">
        <p className="text-xl font-semibold">How can we help?</p>
        <p className="text-gray-500 text-sm font-light">
          Feel free to ask a question or simply leave a comment
        </p>
      </div>

      <div className="mt-6">
        <label className="block text-black text-lg">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          {...register("subject", { required: "Subject is required" })}
          className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
        />
        {errors.subject && (
          <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
        )}
        <span className="italic text-xs text-gray-400">
          How can we help you?
        </span>
      </div>

      <div className="mt-6">
        <label className="block text-black text-lg">
          Comments / Questions <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={6}
          className={`w-full px-4 py-2 bg-[#fafafa] border rounded-sm focus:outline-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>

      {submitSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
    </form>
  );
}
