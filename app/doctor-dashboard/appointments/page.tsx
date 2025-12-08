// Get the Data from the Report model
// just use the fields name and Appointment time
// and get the appointments of that relevant doctor

import Link from "next/link";

function Page() {
  return (
    <div className="md:ml-28">
      <div className="flex items-center justify-center text-3xl font-mono font-semibold text-emerald-700 mt-10">
        Appointments
      </div>
      {/* List of all items  */}
      <div className="p-4">
        <table className="table-auto border-2 border-emerald-700 w-full">
          <thead className="border-2 border-emerald-700">
            <tr>
              <th className="border-2 border-emerald-700 p-2">Id</th>
              <th className="border-2 border-emerald-700 p-2">Name</th>
              <th className="border-2 border-emerald-700 p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
              <tr key={idx} className="border-2 border-emerald-700 text-center">
                <td className="border-2 border-emerald-700">{idx + 1}</td>

                <td className=" md:text-left md:pl-5 p-2">
                  <Link
                    href={"/doctor-dashboard/addprescription"}
                    className="flex w-full"
                  >
                    Junaid Nawaz
                  </Link>
                </td>

                <td className="border-l-2 border-emerald-700">9-10pm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
