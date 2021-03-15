import { Suspense, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  useTypedQuery,
  useCacheQuery,
  deleteUsersById,
  todosVar,
} from "@jangbuda-frontend/common";
import { Home, MyPage } from "./routes";
import { useRecoilState } from "recoil";
import { homeAtom, mypageAtom } from "./stores";

const App = () => {
  const [value, setValue] = useState("");
  const { data, loading } = useTypedQuery({
    users: {
      __typename: true,
      username: true,
      id: true,
    },
    user: [
      { id: 1 },
      {
        __typename: true,
        id: true,
        username: true,
      },
    ],
  });

  const [homeState, setHomeState] = useRecoilState(homeAtom);
  const [mypageState, setMyPageState] = useRecoilState(mypageAtom);

  // console.log("homeState: ", homeState);
  // console.log("mypageState: ", mypageState);
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <p>
          <h5>count : {homeState}</h5>
          <button onClick={() => setHomeState((prev) => prev + 1)}>
            클릭!
          </button>
          <p>user - {data?.user.username}</p>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p>
            <span>
              id :{" "}
              <input
                type="text"
                value={mypageState.id}
                onChange={(e) => {
                  setMyPageState((prevState) => ({
                    ...prevState,
                    id: Number(e.target.value),
                  }));
                }}
              />{" "}
            </span>
          </p>
          <p>
            <span>
              username :{" "}
              <input
                type="text"
                value={mypageState.username}
                onChange={(e) => {
                  setMyPageState((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }));
                }}
              />{" "}
            </span>
          </p>
          <div>
            <button
              onClick={async () => {
                if (value !== "") {
                  console.log("todosVar: ", todosVar);
                  const res = await deleteUsersById(todosVar);
                  console.log("RES: ", res(Number(value)));
                  // const r = useCacheQuery(Number(value));
                  // console.log('r: ', r);
                }
              }}
            >
              click
            </button>
            {data?.users.map((v, key) => (
              <h5 key={key}>
                {v.username} ({v.id})
              </h5>
            ))}
          </div>
          <p>
            <BrowserRouter>
              <Suspense fallback={<span>wait...</span>}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/mypage" component={MyPage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </p>
        </p>
      )}
    </>
  );
};

export default App;
