import type { RequestHandler } from "@sveltejs/kit";
import { text } from "svelte/internal";

let todos: Todo[] =[];

export const get:RequestHandler = () =>{
    return {
        status:200,
        body:todos
    }
}

export const post:RequestHandler<{}, FormData> = (request) =>{
    todos.push({
      created_at: new Date(),
      text: request.body.get("text"),
      done:false
    });

    return{
        status:303,
        headers:{
            location:"/"
        }

    }
}