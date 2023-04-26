const DeleteAccountTab = ({ modalFn }) => {
  return (
    <div className="flex flex-col">
      <div>
        <h3 className="text-3xl underline mb-4">Delete account</h3>
        <p>
          You'll lose all your saved jobs. Are you sure you want to delete your
          account?
        </p>
      </div>
      <div className="relative z-0 w-full mb-8 group mt-6">
        <input
          type="email"
          id="confirmation"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          maxLength={50}
        />
        <label
          htmlFor="confirmation"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-[5] origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Enter your email for confirmation
        </label>
      </div>

      <div className="flex gap-8">
        <button
          onClick={modalFn}
          className="flex w-fit items-center gap-2 hover:gap-3 px-3 py-2 text-sm font-medium text-center text-white transition-all rounded-lg hover:bg-blue-800 focus:ring-4 bg-blue-900 focus:ring-blue-800"
        >
          Cancel
        </button>
        <button
          //   onClick={handleDeleteAccount}
          //   disabled={watch("confirmation") !== userInfo.email}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-900 flex w-fit items-center gap-2 hover:gap-3 px-3 py-2 text-sm font-medium text-center text-white transition-all rounded-lg hover:bg-red-800 focus:ring-4 bg-red-900 focus:ring-red-800"
        >
          {/* <MdOutlineDangerous /> */}
          Delete account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountTab;
