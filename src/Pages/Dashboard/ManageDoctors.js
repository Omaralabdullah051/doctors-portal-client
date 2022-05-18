import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const { data, isLoading, refetch } = useQuery("doctors", () =>
    fetch("https://intense-wildwood-88392.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors {data?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DeleteConfirmModal
          setDeletingDoctor={setDeletingDoctor}
          refetch={refetch}
          deletingDoctor={deletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
