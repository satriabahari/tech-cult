import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface InputFieldProps<TFormValue extends FieldValues> {
  register: UseFormRegister<TFormValue>;
  name: Path<TFormValue>;
  error: FieldErrors;
  rule?: RegisterOptions;
  isTextArea?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function InputField<TFormValue extends FieldValues>({
  name,
  rule,
  error,
  isTextArea = false,
  placeholder = "",
  rows = 2,
  register,
}: InputFieldProps<TFormValue>) {
  const renderPlaceholder =
    placeholder || name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="space-y-2">
      {isTextArea ? (
        <textarea
          rows={rows}
          placeholder={renderPlaceholder}
          {...register(name, rule)}
          className="col-span-2 w-full rounded-xl bg-neutral-50 px-4 py-2 outline outline-neutral-300 focus:outline-2 focus:outline-red-500 dark:bg-neutral-900 dark:outline-neutral-700"
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={renderPlaceholder}
          {...register(name, rule)}
          className="w-full rounded-full bg-neutral-50 px-4 py-2 outline outline-neutral-300 focus:outline-2 focus:outline-red-500 dark:bg-neutral-900 dark:outline-neutral-700"
        />
      )}
      {error[name]?.type === "required" && (
        <p role="alert" className="text-[10px] text-red-400">
          *{name} is required
        </p>
      )}
      {error[name]?.type === "pattern" && (
        <p role="alert" className="text-[10px] text-red-400">
          *{String(error[name]?.message)}
        </p>
      )}
    </div>
  );
}
