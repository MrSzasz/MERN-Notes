const Navbar = ({userTabFn}) => {
  return (
    <nav className="w-full bg-gray-800 border-b border-gray-700 h-fit p-4 flex justify-between items-center">
      <h3>Notes Vault</h3>
      <button onClick={userTabFn}>
        <img
          className="w-10 h-10 rounded-full"
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt="Rounded avatar"
        />
      </button>
    </nav>
  );
};

export default Navbar;
