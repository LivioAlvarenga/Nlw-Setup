interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="mt-4 h-3 w-full rounded-xl bg-zinc-700">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 w-3/4 rounded-xl bg-blue-600 transition-all"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
}
