// import { ActionTypes, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { appState, appStateType} from "./states";


export let appReducer = (state:any = appState, action: any):appStateType => {
//   let newTodos = [];
//   switch (action.type) {
//     case ADD_TODO:
//       newTodos = [...state];
//       newTodos.push(action.payload);
//       return newTodos;
//     case DELETE_TODO:
//       newTodos = [...state];
//       newTodos = newTodos.filter((todo:todoType) => {
//         return todo.id != action.payload;
//       });
//       return newTodos;
//     case UPDATE_TODO:
//       newTodos = [...state];
//       let index = -1;
//       for (let i = 0; i < newTodos.length; i++) {
//         index++;
//         if (newTodos[i].id == action.payload.id) {
//           break;
//         }
//       }
//       if (index != -1) {
//         newTodos[index] = action.payload
//         return newTodos
//       }
//   }
  return state;
};

