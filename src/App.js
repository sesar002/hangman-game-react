import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    changeQuote,
    changeLength,
    changeUniqueCharacters,
    changeUserName,
    changeErrors,
    changeDuration,
  } = bindActionCreators(actionCreators, dispatch);

  console.log(user);
  return (
    <div>
      <input type="text" onChange={(e) => changeUserName(e.target.value)} />
      <input type="text" onChange={(e) => changeQuote(e.target.value)} />
    </div>
  );
}

export default App;
