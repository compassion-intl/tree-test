const fb = "https://usability-tree-testing.firebaseio.com";

const API = {
  getNavItems: () => {
    return fetch(`${fb}/navItems.json`).then((e) => e.json());
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
        console.log(e);
        let x = e.sort();
        let y = x.reverse();
        return y;
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
        let x = e.sort();
        let y = x.reverse();
        return y;
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
        let x = e.sort();
        let y = x.reverse();
        return y;
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
