import { DocumentData } from "@firebase/firestore";

type Props = {
  message: DocumentData;
};
const Message = ({ message }: Props) => {
  const {
    text,
    user: { avatar, name },
  } = message;

  const isChatGPT: boolean = name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-gray-600"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />
        <p className="text-gray-400 pt-1 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Message;
