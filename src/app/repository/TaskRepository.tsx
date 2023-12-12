async function getTask() {
  var res = await fetch("https://nirwanalines.000webhostapp.com/api/tasks");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export { getTask };
