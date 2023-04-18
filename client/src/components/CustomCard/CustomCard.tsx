import { BsFillPencilFill } from "react-icons/bs";

const CustomCard = ({
  title = "title",
  noteContent = "noteContent",
  date = "dd/mm/yy",
}) => {
  return (
    <div
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        cursor: "default",
      }}
      className="w-[24%] h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 py-5 px-4 min-w-[10em]"
    > 
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {title}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm">
          {noteContent}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">{date}</p>
          <button
            className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
            aria-label="edit note"
            role="button"
          >
            <BsFillPencilFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
