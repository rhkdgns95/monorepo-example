import { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useTypedQuery } from "@jangbuda-frontend/common";
import { Home, MyPage } from "./routes";

const App = () => {
  const { data, loading } = useTypedQuery({
    users: {
      username: true,
      id: true,
    },
    user: [
      { id: 1 },
      {
        id: true,
        username: true,
      },
    ],
  });

  console.log("data: ", data);
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <p>user - {data?.user.username}</p>
          <div>
            {data?.users.map((v, key) => (
              <h5 key={key}>
                {v.username} ({v.id})
              </h5>
            ))}
          </div>
          <>
            <BrowserRouter>
              <Suspense fallback={<span>wait...</span>}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/mypage" component={MyPage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </>
        </>
      )}
    </>
  );
};

export default App;
