import { app } from "./app.js";
import { config } from './config/index.js'

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${config.port}`);
})
