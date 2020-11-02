export default [
  {
    name: 'BACKLOG',
    tickets: [
      {
        name: "Add Tickets functionality",
        active: true,
        subTickets: [
          { name: "Make a single ticket expandable, the rest collapsed" },
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      },
      {
        name: "Implement a pomodoro timer",
        active: false,
        subTickets: [
          { name: "Add the outline and static components" },
          { name: "Change timer period?" },
          { name: "Connect tickets with timer"},
          { name: "Limit pomodoro timer button to 'IN-PROGRESS' section"}
        ]
      }
    ]
  },
  {
    name: 'IN-PROGRESS',
    tickets: [
      {
        name: "Add Tickets functionality",
        active: false,
        subTickets: [
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      },
      {
        name: "Implement a pomodoro timer",
        active: false,
        subTickets: [
          { name: "Add the outline and static components" },
          { name: "Change timer period?" },
          { name: "Connect tickets with timer"},
          { name: "Limit pomodoro timer button to 'IN-PROGRESS' section"}
        ]
      }
    ]
  },
  {
    name: 'COMPLETE',
    tickets: [
      {
        name: "Add Tickets functionality",
        active: false,
        subTickets: [
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      }
    ]
  }
]

