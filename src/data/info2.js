export default [
  {
    id: 1,
    name: "Sponsor a Child",
    type: 1,
    childOf: null
  },
  {
    id: 2,
    name: "View Longest Waiting",
    type: 2,
    childOf: 1
  },
  {
    id: 3,
    name: "View All Children",
    type: 2,
    childOf: 1
  },
  {
    id: 4,
    name: "Why Sponsor?",
    type: 1,
    childOf: 1
  },
  {
    id: 5,
    name: "testSub",
    type: 2,
    childOf: 4
  },
  {
    id: 6,
    name: "Ways to Donate",
    type: 1,
    childOf: null
  },
  {
    id: 7,
    name: "Meet Critical Needs",
    type: 2,
    childOf: 6
  },
  {
    id: 8,
    name: "Help Babies",
    type: 2,
    childOf: 6
  }
];
