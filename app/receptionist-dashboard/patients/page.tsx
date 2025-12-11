// Get all reports of that doctor along with report details

function Page() {
  return (
    <div className="md:ml-28">
      <div className="flex items-center justify-center text-3xl font-mono font-semibold text-emerald-700 mt-10">
        Patients
      </div>
      {/* List of all items  */}
      <div className="p-4">
        <table className="table-auto border-2 border-emerald-700 w-full">
          <thead className="border-2 border-emerald-700">
            <tr className="text-emerald-700">
              <th className="border-2 border-emerald-700">Id</th>
              <th className="border-2 border-emerald-700">Name</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
              <tr key={idx} className="border-2 border-emerald-700 text-center">
                <td className="border-2 border-emerald-700">{idx + 1}</td>
                <td className="border-2 border-emerald-700 md:text-left md:pl-5">
                  Junaid Nawaz
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
