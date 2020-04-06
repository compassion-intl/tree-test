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
  getTaskResults: () => {
    return fetch(`${fb}/loggedEntries.json?orderBy="taskNumber"`)
      .then((results) => results.json())
      .then((e) => {
        const data = e;
        return Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
      });
  },
};

export default API;
