import React from "react";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import { Link } from 'react-router-dom';

const Announcement = () => {
  return (
    <div className="flex justify-center">
      <Alert
        color="success"
        icon={HiInformationCircle}
        className="flex justify-center mt-24 w-11/12"
      >
        <div className="flex justify-center items-center gap-4">
          <p>
            Seluruh peserta try out akan mengakses halaman tes melalui tombol berikut.
          </p>
          <Link to="/login" className="bg-white p-2 w-24 text-stone-900 rounded-md transition duration-200 hover:scale-105">Login</Link>
        </div>
      </Alert>
    </div>
  );
};

export default Announcement;
