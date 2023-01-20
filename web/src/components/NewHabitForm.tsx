import { faker } from "@faker-js/faker";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-Feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

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

      <label htmlFor="" className="mt-6 font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <div className="mt-3 flex flex-col gap-2">
        {availableWeekDays.map((weekDay) => {
          return (
            <Checkbox.Root
              key={faker.datatype.uuid()}
              className="group flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-zinc-800 bg-zinc-900 group-data-[state=checked]:border-green-500 group-data-[state=checked]:bg-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className=" leading-tight text-white ">{weekDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-green-600 p-4 font-semibold duration-300 ease-in-out hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
