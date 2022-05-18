import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0kmMFBnaKJyYKf2o6YJFHI31OWEinFLj1hqZ0NyaiZa8sHfIs5997wCcLTRZeOB1dlfizP49GrsOdK4MrmCitJ00EujHnG0K"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://intense-wildwood-88392.herokuapp.com/booking/${id}`;
  const queryKey = ["booking", id];
  const fetcher = () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json());

  const { data: appointment, isLoading } = useQuery(queryKey, fetcher);
  console.log(appointment);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card w-50 bg-base-100 shadow-xl max-w-md my-12">
        <div className="card-body">
          <h5 className="text-success font-bold">
            Hello, {appointment.patientName}
          </h5>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p className="text-sm">
            Your Appointment
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 p-8">
        <div className="card-body"></div>
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
