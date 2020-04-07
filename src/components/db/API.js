const fb = "https://usability-tree-testing.firebaseio.com";

const API = {
  getNavItems: () => {
    return fetch(`${fb}/navItems.json`).then((e) => e.json());
  },
  getNavItemsNew: () => {
    return fetch(`${fb}/navItemsNew.json`).then((e) => e.json());
  },
  taskComplete: (obj) => {
    return fetch(`${fb}/loggedEntries.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((e) => e.json());
  },
  getAllTaskResults: () => {
    return fetch(
      `${fb}/loggedEntries.json?orderBy="taskNumber"&startAt="task-1"`
    )
      .then((results) => results.json())
      .then((e) => {
        const data = e;
        return Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
      })
      .then((e) => {
        function compare(a, b) {
          if (
            parseInt(a.taskNumber.split("-")[1]) <
            parseInt(b.taskNumber.split("-")[1])
          )
            return -1;
          if (
            parseInt(a.taskNumber.split("-")[1]) >
            parseInt(b.taskNumber.split("-")[1])
          )
            return 1;
          return 0;
        }
        let x = e.sort(compare);
        return x;
      });
  },
  getExistTaskResults: () => {
    return fetch(
      `${fb}/loggedEntries.json?orderBy="taskNumber"&startAt="task-1"`
    )
      .then((results) => results.json())
      .then((e) => {
        const data = e;
        return Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
      })
      .then((e) => {
        function compare(a, b) {
          if (
            parseInt(a.taskNumber.split("-")[1]) <
            parseInt(b.taskNumber.split("-")[1])
          )
            return -1;
          if (
            parseInt(a.taskNumber.split("-")[1]) >
            parseInt(b.taskNumber.split("-")[1])
          )
            return 1;
          return 0;
        }
        let x = e.sort(compare);
        return x;
      })
      .then((e) => {
        let desiredResults = e.filter(
          (item) => item.section === "Existing Structure"
        );
        return desiredResults;
      });
  },
  getNewTaskResults: () => {
    return fetch(`${fb}/loggedEntries.json?orderBy="taskNumber"`)
      .then((results) => results.json())
      .then((e) => {
        const data = e;
        return Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
      })
      .then((e) => {
        function compare(a, b) {
          if (
            parseInt(a.taskNumber.split("-")[1]) <
            parseInt(b.taskNumber.split("-")[1])
          )
            return -1;
          if (
            parseInt(a.taskNumber.split("-")[1]) >
            parseInt(b.taskNumber.split("-")[1])
          )
            return 1;
          return 0;
        }
        let x = e.sort(compare);
        return x;
      })
      .then((e) => {
        let desiredResults = e.filter(
          (item) => item.section === "New Structure"
        );
        return desiredResults;
      });
  },
};

export default API;
