import { Plus } from "phosphor-react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <img src={logo} alt="Habits" />
      <button
        type="button"
        className="flex items-center gap-3 rounded-lg border border-blue-500 px-6 py-4 font-semibold duration-300 ease-in-out hover:border-blue-300"
      >
        <Plus size={20} className="text-blue-500" />
        Novo hábito
      </button>
    </div>
  );
}
