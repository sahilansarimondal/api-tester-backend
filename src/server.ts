import app from "./app";
import config from "./config/config";

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on ${config.baseURL}`);
});
