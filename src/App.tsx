import { useState } from "react";
import CustomButton from "./CustomButton";
import { DialogueChoice, dialogueStates } from "./dialogueData";

function App() {
  const [currentDialogue, setCurrentDialogue] = useState("start");
  const currentState = dialogueStates[currentDialogue];

  const handleChoice = (choice: DialogueChoice) => {
    setCurrentDialogue(choice.nextId);
  };

  return (
    <div className="bg-pink-200 h-screen flex items-center justify-center gap-6 flex-col p-4">
      {(currentState.gif || currentState.choices.some((choice) => choice.gif)) && (
        <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg">
          <img src={currentState.gif || currentState.choices.find((choice) => choice.gif)?.gif} alt="Dialogue animation" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="min-w-full py-20 px-4 bg-pink-300 border-2 border-fuchsia-200 rounded-xl shadow-lg">
        <p className="text-xl text-gray-600 text-center">{currentState.text}</p>
      </div>

      <div className="flex gap-4 p-4">
        {currentState.choices.map((choice, index) => (
          <CustomButton key={index} onClick={() => handleChoice(choice)} text={choice.buttonText} />
        ))}
      </div>
    </div>
  );
}

export default App;
