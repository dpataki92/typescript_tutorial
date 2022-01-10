import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
    alsdfk
  </ChildAsFC>
};

export default Parent;