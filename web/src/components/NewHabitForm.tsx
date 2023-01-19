import { Check } from "phosphor-react";


export default function NewHabitForm() {
  return (
    <form className="mt-6 flex w-full flex-col">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="mt-3 rounded-lg bg-zinc-800 p-4 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label htmlFor="" className="mt-4 font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <button type="submit" className="mt-6 rounded-lg p-4 items-center justify-center flex gap-3 font-semibold bg-green-600 duration-300 ease-in-out hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
