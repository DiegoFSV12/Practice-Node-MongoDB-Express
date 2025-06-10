import {Server} from "./server";
import './globals'; // 👈 ahora TypeScript incluirá tus declaraciones

(()=>{
    main();
})();

function main(){
    const server = new Server();
    server.start(5100);
}