const Navbar = () => {
  return (
    <nav className="w-full bg-red-500 h-fit p-4 flex justify-between items-center">
      <h3>Notes Vault</h3>
      <button>
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
