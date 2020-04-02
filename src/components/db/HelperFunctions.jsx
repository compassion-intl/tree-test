import API from "../db/API";

const HF = {
  toggleItemBorder: child => {
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

  foundTheItem: item => {
    let clickedItems = [];
    let child;
    document.addEventListener("click", e => {
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
      timeToCompletion: seconds + 1,
      itemsClicked: clickedItems
    };

    API.taskComplete(taskData);
  }
};

export default HF;
