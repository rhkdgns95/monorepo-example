import { useTypedQuery } from "@jangbuda-frontend/common";

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
        </>
      )}
    </>
  );
};

export default App;
