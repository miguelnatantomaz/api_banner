import app from "./app";

const init = async () => {
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}!`);
  });
};

init();
