import API from "../db/API";

const HF = {
  toggleItemBorder: (child) => {
    if (child) {
      switch (child.childNodes[0].classList.contains("selected-border")) {
        case true:
          child.childNodes[0].classList.remove("selected-border");
          break;

        default:
          child.childNodes[0].classList.add("selected-border");
          break;
      }
    }
  },

  foundTheItem: (item) => {
    let clickedItems = [];
    let child;
    document.addEventListener("click", (e) => {
      child = e.target.closest(".dd-inner-container");

      if (child) {
        HF.toggleItemBorder(child);
        let childTitle = child.childNodes[0].childNodes[0].textContent;

        clickedItems.push(childTitle);
        return clickedItems;
      }
      return clickedItems;
    });
    return clickedItems;
  },

  submitTaskData: (userEyeDee, seconds, clickedItems) => {
    const taskData = {
      userId: JSON.parse(userEyeDee).email,
      section: "Existing Structure",
      taskNumber: window.location.pathname.split("/")[1],
      timeToCompletion: seconds.toFixed(1),
      itemsClicked: clickedItems,
    };

    API.taskComplete(taskData);
  },

  calculateAverages: (task) => {
    let taskAvg;
    if (task !== undefined && task.length > 0) {
      let taskSum = task.reduce((a, b) => {
        return {
          timeToCompletion:
            parseFloat(a.timeToCompletion) + parseFloat(b.timeToCompletion),
        };
      });

      taskAvg = (taskSum.timeToCompletion / task.length).toFixed(2);
      return taskAvg;
    } else {
      return "--  ";
    }
  },
};

export default HF;
