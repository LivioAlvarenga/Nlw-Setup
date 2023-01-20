import Header from "./components/Header";
import SummaryTable from "./components/SummaryTable";
import "./lib/dayjs";
import "./styles/global.css";

export function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-16 px-6">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
