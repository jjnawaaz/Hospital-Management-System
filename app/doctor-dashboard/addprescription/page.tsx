function Page() {
  return (
    <div className="md:ml-28 ">
      <div className="flex justify-center items-center mt-10 text-3xl font-semibold">
        Write Prescription
      </div>
      <div className="flex flex-col gap-y-4 justify-center w-full p-4">
        <textarea
          name="prescription"
          id="textarea"
          className="border-2 border-emerald-700 w-full h-60 focus:outline-emerald-400"
        ></textarea>
        <div className="flex justify-center">
          <button className="bg-emerald-700 px-2 py-2 text-sm font-semibold rounded-md text-white flex justify-center">
            Generate Prescription
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
