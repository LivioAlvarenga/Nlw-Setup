import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import logo from "../assets/logo.svg";
import NewHabitForm from "./NewHabitForm";

export default function Header() {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <img src={logo} alt="Habits" />
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="flex items-center gap-3 rounded-lg border border-blue-500 px-6 py-4 font-semibold transition-colors hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus size={20} className="text-blue-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-background/80" />

          <Dialog.Content className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 p-10">
            <Dialog.Close className="absolute right-6 top-6 rounded-lg text-zinc-400 duration-300 ease-in-out hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl font-extrabold leading-tight tracking-wide">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
