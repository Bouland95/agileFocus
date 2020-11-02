export default [
  {
    name: 'Backlog',
    tickets: [
      {
        name: "Add Tickets functionality",
        subTickets: [
          { name: "Make a single ticket expandable, the rest collapsed" },
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      },
      {
        name: "Implement a pomodoro timer",
        subTickets: [
          { name: "Add the outline and static components" },
          { name: "Change timer period?" },
          { name: "Connect tickets with timer"},
          { name: "Limit pomodoro timer button to 'In-Progress' section"}
        ]
      }
    ]
  },
  {
    name: 'In-Progress',
    tickets: [
      {
        name: "Add Tickets functionality",
        subTickets: [
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      },
      {
        name: "Implement a pomodoro timer",
        subTickets: [
          { name: "Add the outline and static components" },
          { name: "Change timer period?" },
          { name: "Connect tickets with timer"},
          { name: "Limit pomodoro timer button to 'In-Progress' section"}
        ]
      }
    ]
  },
  {
    name: 'Complete',
    tickets: [
      {
        name: "Add Tickets functionality",
        subTickets: [
          { name: "Add a new ticket or sub-ticket" },
          { name: "Sub tickets are movable by click or maybe drag" },
          { name: "Allow creation of new tickets"}
        ]
      }
    ]
  }
]

