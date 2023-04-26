import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FormUserTab = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);

  const handleFormChange = () => {
    setIsLogInForm((current) => !current);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl">
          {isLogInForm ? "Log In" : "Create an account"}
        </h2>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full flex-col justify-center items-center p-4 gap-8"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="relative z-0 w-full group">
            <input
              type="email"
              id="formUserEmail"
              name="formUserEmail"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer z-10"
              placeholder=" "
              maxLength={50}
              required
            />
            <label
              htmlFor="confirmation"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10"
            >
              email@domain.com
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="password"
              id="formUserPass"
              name="formUserPass"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer z-10"
              placeholder=" "
              maxLength={25}
              required
            />
            <label
              htmlFor="confirmation"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          {!isLogInForm && (
            <div className="relative z-0 w-full group">
              <input
                type="password"
                id="formUserPassConfirmation"
                name="formUserPassConfirmation"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer z-10"
                placeholder=" "
                maxLength={25}
                required
              />
              <label
                htmlFor="confirmation"
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
          )}
        </div>
        <button className="px-8 py-4 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
          {isLogInForm ? "Login" : "Register"}
        </button>
      </form>
      <button
        onClick={handleFormChange}
        className="flex items-center gap-2 border-b border-transparent transition-all hover:gap-3 hover:border-white text-lg font-semibold"
      >
        {isLogInForm ? (
          <>
            Register
            <AiOutlineArrowRight />
          </>
        ) : (
          <>
            <AiOutlineArrowLeft />
            Cancel
          </>
        )}
      </button>
    </>
  );
};

export default FormUserTab;
