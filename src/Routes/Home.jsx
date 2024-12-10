import Card from "../Components/Card";
import { useGlobalStates } from "../Context/Context";

const Home = () => {
  const { state } = useGlobalStates();
  console.log(state.dentistas);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentistas.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home;
