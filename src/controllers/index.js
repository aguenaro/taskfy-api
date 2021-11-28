import { NewUserController } from "./users";
import { NewBoardController } from "./boards";
import { NewListController } from "./lists";

export const NewControllerContainer = (serviceContainer) => {
  return {
    UserController: NewUserController(serviceContainer),
    BoardController: NewBoardController(serviceContainer),
    ListController: NewListController(serviceContainer),
  };
};
