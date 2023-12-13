async function getInbox() {
  var res = await fetch("https://nirwanalines.000webhostapp.com/api/inboxes");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}
async function getDetailInbox() {
  var res = await fetch("https://nirwanalines.000webhostapp.com/api/inboxes/show");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export { getInbox,getDetailInbox };