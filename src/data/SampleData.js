export const GetAnnouncements = () => {
  return [
    {
      Id: 1,
      Class: "UI",
      Title: "Today's class",
      HasOpened: false,
      PostedOn: "11/08/2023",
      Announcer: "Jillian Aurisano",
      Pronouns: "she, her, hers",
      Message:
        "1. Please send out our survey https://forms.gle/p6nRckdyfJiuH6Fo9 \n2. Friday's class- we will analyze survey results.  We will report these results in documentation, even if it does not significantly impact your project 2 implementation. \n2. Friday's class- we will analyze survey results.  We will report these results in documentation, even if it does not significantly impact your project 2 implementation. \n3. Please finish the in-class activity from Monday.  Heuristic Evaluation In-Class Activity \n4. Please finish the implementation checkpoint.  Project 2 implementation checkpoint \nI am not going to assign additional work for today, but encourage you to meet with your team to check-in on the project and plan the final phases. \nGood luck everyone!",
    },
    {
      Id: 2,
      Class: "UI",
      Title: "Project 2 implementation check point",
      HasOpened: false,
      PostedOn: "11/06/2023",
      Announcer: "Jillian Aurisano",
      Pronouns: "she, her, hers",
      Message:
        "I got some questions about the implementation check-in. \nI just want to get a sense of how things are going and what your plan is for completing the project. \nOne person in your group needs to submit.  Everyone else can list their team mates and indicate who is submitting. \nI didn't post a submission link, so I extended this deadline to Wednesday. ",
    },
    {
      Id: 3,
      Class: "UI",
      Title: "Asynchronous class this week",
      HasOpened: true,
      PostedOn: "11/05/2023",
      Announcer: "Jillian Aurisano",
      Pronouns: "she, her, hers",
      Message:
        "Today's activity is posted: Heuristic Evaluation In-Class Activity \nSubmit your team's work here: Heuristic Evaluation submission",
    },
    {
      Id: 4,
      Class: "UI",
      Title: "Everyone- check Project 1 documentation",
      HasOpened: true,
      PostedOn: "11/03/2023",
      Announcer: "Jillian Aurisano",
      Pronouns: "she, her, hers",
      Message:
        "Hi all, \nWe are experiencing major problems accessing documentation files for many students, so I am sending out a blanket announcement. \nEveryone: please check right now to ensure that your entire documentation- all images, files, videos- is publicly accessible to everyone on the web.  \nThank you!",
    },
    {
      Id: 5,
      Class: "UI",
      Title: "Class Wednesday- better in person",
      HasOpened: false,
      PostedOn: "10/30/2023",
      Announcer: "Jillian Aurisano",
      Pronouns: "she, her, hers",
      Message:
        "Wednesday's class we are going to do an observational activity that will be difficult to replicate on Zoom.  I strongly suggest coming in person on Wednesday. ",
    },
  ];
};

export const GetClassAnnouncements = (className) => {
  const messages = GetAnnouncements();
  return messages.filter((x) => x.Class == className);
};

export const GetAnnouncmentMessage = (messageId) => {
  const messages = GetAnnouncements();
  return messages.find((x) => x.Id == messageId);
};
