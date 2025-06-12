"use client"; //important (use cntrl + f to navigate through steps!);

//step 1: besure to import useState and type "use client" on top so you can tell the next.js that you are using client-side;

import React, { useState } from "react";

function page() {
  //step 2: Making variables (in React.js useState is a way of making variables) for task's titles and descriptions so we can update them later when the user add the tasks;
  const [name, setname] = useState("");
  //we are gonna be leaving these variable's value empty so the user can add whatever they want in them;
  const [desc, setdesc] = useState("");

  //(read this only after finishing step 3,4,5,6 which are below). step 7: now we have to save what we type in the form, because whenever we click on the "add task" button the page just refreshes so we have to prevent that;

  //step 8: now we are gonna make a variable for added tasks, which is gonna be an empty array;

  const [addedTasks, setaddedTasks] = useState([]);

  // this function below will help in submiting the tasks name and desc through the form;

  const submitHandler = (elem) => {
    //this will prevent the page from refreshing;
    elem.preventDefault();

    setaddedTasks([...addedTasks, { name, desc }]); //this will put the name and desc of the added task to the empty array. i have used spread operator ("...") to save the previous tasks from deleting upon adding another one;

    //this below 2 lines will empty the input bar after pressing the button;
    setdesc("");
    setname("");
  };

  //step 9: declaring variable to render if there is any tasks added or not;

  let renderTasks = <h2 className="p-3 bg-gray-800">No Tasks added yet.</h2>;

  //step 10: now we are gonna put the task inside the renderTasks variable using map() function so when the user hits the add button the todo task will appear instead of "No tasks" message;

  //step 10.5: we are gonna put the whole code of render task inside an if-statement so we can let the default "no task" message to appear if there is no task added;

  if (addedTasks.length > 0) {
    renderTasks = addedTasks.map((taskName, index) => {
      return (
        <li key={index} className="list-none flex justify-center">
          <div className="flex justify-between bg-gray-800 w-4/5 text-slate-300 p-5 items-center border-b-2 border-solid">
            <p className="text-2xl font-semibold">{taskName.name}</p>
            <p className="text-xl font-semibold">{taskName.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler();
            }}
            className="bg-black w-30 h-15 p-1 m-5 hover:bg-red-800 transition-all"
          >
            Delete Task
          </button>
        </li>
      );
    });
  }

  //step 11 (final step): Making Delete handler function for removing tasks from todo list;

  //we are gonna give this delete handler function an index in arguement so it can detect the index of the addedTasks array and then splice (slice) one task at a time, (this function will be triggered with the delete button which is above!);

  const deleteHandler = (index) => {
    let deletor = [...addedTasks]; //connecting the deletor variable to the added task array;
    deletor.splice(index, 1);
    setaddedTasks(deletor); //using the setaddedTasks variable to trigger the deletor variable;
  };

  return (
    <>
      <h1 className="text-center h-15 p-1 text-4xl bg-linear-to-r from-black via-gray-600 to-black">
        📝NINJA's Todo-List App📝
      </h1>
      {/* step 3: make html form */}
      <form onSubmit={submitHandler} className="flex justify-center p-5">
        {/* step 6: we are gonna add "onSubmit" attribute to the form tag and with that we are gonna trigger the "submitHandler" function (which we have declared above); */}
        <input
          type="text"
          placeholder="Enter Todo-Task here"
          className="m-5 p-1 w-100 h-15 bg-gray-600 text-white"
          value={name} //step 4:this will update the name variable with the value of what user want to enter;
          onChange={(elem) => {
            setname(elem.target.value); //we are telling react.js to "change" the value inside the bar as the user types their tasks (without this function nothing will appear in the bar);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Task Description here"
          className="m-5 p-1 w-100 h-15 bg-gray-600 text-white"
          value={desc} //step 5: now applying the same method here as we did up on the task name input tag;
          onChange={(elem) => {
            setdesc(elem.target.value);
          }}
        ></input>
        <button className="bg-black w-30 h-15 p-1 m-5 hover:bg-gray-700 transition-all ">
          Add Task
        </button>
      </form>

      <div className="bg-slate-600 p-10 text-center">
        <div className="flex ml-51 gap-96 text-2xl">
          <h1 className="bg-slate-700 p-2.5">Task Name</h1>
          <h1 className="bg-slate-700 p-2.5">Task Description</h1>
        </div>
        {renderTasks}
      </div>
    </>
  );
}

export default page;
