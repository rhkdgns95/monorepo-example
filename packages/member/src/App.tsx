import { useTypedQuery } from "@jangbuda-frontend/common";

export const App = () => {
  const { data } = useTypedQuery({
    countries: [{ filter: undefined }, { capital: true, code: true }],
  });

  console.log("data: ", data);
  return (
    <>
      {data?.countries.map((item, key) => (
        <p key={key}>
          {item.capital} ({item.code})
        </p>
      ))}
    </>
  );
};
