import { FaTrash } from "react-icons/fa";

const CustomCard = ({
  title = "title",
  noteContent = "noteContent",
  date = "dd/mm/yy",
  modalFn,
  // userFn,
  deleteFn,
}) => {
  return (
    <div
      onClick={() => {
        modalFn();
        // userFn();
      }}
      className="w-[24%] h-64 flex flex-col justify-between bg-gray-800 border-gray-700 rounded-lg border py-5 px-4 min-w-[10em] cursor-default"
    >
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {title}
        </h4>
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          className="text-gray-800 dark:text-gray-100 text-sm"
        >
          {noteContent}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">{date}</p>
          <button
            className="w-8 h-8 rounded-full bg-red-600  dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
            aria-label="edit note"
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              deleteFn();
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
