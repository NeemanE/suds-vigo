import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import {
  MdLocalLaundryService,
  MdOutlineShoppingCartCheckout,
  MdLibraryAddCheck,
} from "react-icons/md";
import React from "react";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We provide a wide range of creative services to suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="card bordered">
            <figure className="px-10 pt-10">
              <MdLocalLaundryService className="text-5xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Washing/Drying</h2>
              <p>We make it quick and easy for you to get things done.</p>
            </div>
          </div>

          <div className="card bordered">
            <figure className="px-10 pt-10">
              <MdOutlineShoppingCartCheckout className="text-5xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Store</h2>
              <p>Missing something to get your laundry perfect? We have plenty of solutions in-store to take care of it.</p>
            </div>
          </div>

          <div className="card bordered">
            <figure className="px-10 pt-10">
              <MdLibraryAddCheck className="text-5xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Always Top Quality</h2>
              <p>All of our machines are maintained and capable of giving you your best wash and dry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
