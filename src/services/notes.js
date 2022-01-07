import Api from "./api";

const NotesServices = {
  index: () =>
    Api.get("/notes", {
      headers: { "x-acess-token": localStorage.getItem("token") },
    }),
};

export default NotesServices;
