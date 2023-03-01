import { PlusIcon } from "@heroicons/react/24/outline";

const NewChat = () => {
  return (
    <div className="flex border-gray-700 border chat-row">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
