const LoggedUserTab = ({userLogOutFn, openDeleteAccountModalFn}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          className="w-40 h-40 rounded-full"
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt="Rounded avatar"
        />
        <h2 className="pt-4">user name</h2>
        <h3>user mail</h3>
      </div>
      <span>Created date: 11/22/33</span>
      <div className="flex flex-col justify-center items-center gap-8">
        <button onClick={userLogOutFn} className="py-4 px-8 uppercase font-bold rounded-lg bg-red-600">
          Log out
        </button>
        <button onClick={openDeleteAccountModalFn}>
          <small className="text-red-500 underline">Delete account</small>
        </button>
      </div>
    </>
  );
};

export default LoggedUserTab;
