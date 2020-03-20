const fb = "https://usability-tree-testing.firebaseio.com";

const API = {
  getNavItems: () => {
    return fetch(`${fb}/navItems.json`).then(results => results.json());
  }
};

export default API;
