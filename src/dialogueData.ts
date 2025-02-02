export interface DialogueChoice {
  buttonText: string;
  gif?: string;
  nextId: string;
}

export interface DialogueState {
  [key: string]: {
    text: string;
    gif?: string
    choices: DialogueChoice[];
  };
}

export const dialogueStates: DialogueState = {
  start: {
    text: "belo! how r u?",
    choices: [
      {
        buttonText: "im doing amazing!",
        nextId: "amazing",
      },
      {
        buttonText: "not great...",
        nextId: "notGreat",
      },
    ],
  },
    amazing: {
        text: "thats great to hear! i got a question for u...",
        choices: [
        {
            buttonText: "what is it?",
            nextId: "question_1",
        },
        ],
    },
  notGreat: {
    text: "aw, im sorry :(... i got a joke to cheer u up tho!",
    choices: [
      {
        buttonText: "what is it?",
        nextId: "joke",
      },
    ],
  },
  joke: {
    text: "what do you call a fake noodle?",
    choices: [
      {
        buttonText: "i dont know, what?",
        nextId: "pasta",
      },
      {
        buttonText: "oh i know! an impasta!",
        nextId: "pasta_answered",
      }
    ],
  },
  pasta_answered: {
    text: "ight bruh way to ruin my joke smh... i got a question for you tho :P",
    choices: [
      {
        buttonText: "okay... what is it?",
        nextId: "question_1",
      },
    ],
  },
    pasta: {
        text: "an impasta! wasn't that funny? anyways, I got a question for you :P",
        choices: [
        {
            buttonText: "okay... what is it?",
            nextId: "question_1",
        },
        ],
    },
    question_1: {
        text: "its really important",
        choices: [
        {
            buttonText: "got it. what is it?",
            nextId: "question_2",
        },
        ],
    },
    question_2: {
        text: "like really really important...",
        choices: [
        {
            buttonText: "okay, okay! get on with it!",
            nextId: "question_3",
        },
        ],
    },
    question_3: {
        text: "you have to promise to answer truthfully",
        choices: [
        {
            buttonText: "i promise",
            nextId: "question_4",
        },
        ],
    },
    question_4: {
        text: "okay here it goes... eileen ashley, do you wanna be my valentine?",
        choices: [
        {
            buttonText: "yes! <3",
            nextId: "yes",
        },
        {
            buttonText: "no </3",
            nextId: "no",
        },
        ],
    },
    yes: {
        text: "yay! <3",
        choices: [
        {
            buttonText: "yay! <3",
            gif: "/happy_happy_happy.gif",
            nextId: "end",
        },
        ],
    },
    no: {
        text: "wrong answer >:)",
        choices: [
        {
            buttonText: "i meant yes! <3",
            gif: "/sad_cat.gif",
            nextId: "end",
        },
        ],
    },
    end: {
        text: "yay! thanks for playing! <3",
        choices: [
        {
            buttonText: "restart",
            gif: "/dancing_cat.gif",
            nextId: "start",
        },
        ],
    }
};
