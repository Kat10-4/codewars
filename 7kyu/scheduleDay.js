// SCHEDULE YOUR DA(RRA)Y

// The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an array of time alloted to work, broken up with time alloted with breaks:

// Input 1: Hours - Number of hours available to you to get your work done!
// Input 2: Tasks - How many tasks you have to do througout the day
// Input 3: Duration (minutes)- How long each of your tasks will take to complete

// Criteria to bear in mind:

// Your schedule should start with work and end with work.
// It should also be in minutes, rounded to the nearest whole minute.
// If your work is going to take more time than you have, return "You're not sleeping tonight!"

function dayPlan(hours, tasks, duration) {
  let time = hours * 60;
  let work = tasks * duration;
  return work > time
    ? "You're not sleeping tonight!"
    : Array(tasks * 2 - 1)
        .fill(0)
        .map((el, ind) =>
          ind % 2 === 0
            ? (el = duration)
            : (el = Math.ceil((time - work) / (tasks - 1)))
        );
}
