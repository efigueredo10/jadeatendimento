import { useRef, useState, useEffect, type ChangeEvent } from "react";
import style from "./TextArea.module.css";

interface Props {
  value: string;
  label: string;
  setValue: (valor: string) => void;
}

function TextArea({ value, label, setValue }: Props) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);

    // Redimensionar altura
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const obterClasseLabel = () => {
    if (focus || (value && value.trim() !== "")) {
      return `${style.labelSuspenso}`;
    }
    return "";
  };

  const setarFocoInput = () => {
    setFocus(true);
    inputRef?.current?.focus();
  };

  // Ajusta a altura quando o valor muda externamente
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div onClick={setarFocoInput} className={style.inputContainer}>
      <textarea
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={handleOnChange}
        style={{
          resize: "none",
          overflow: "hidden",
        }}
      />
      <label className={obterClasseLabel()}>{label}</label>
    </div>
  );
}

export default TextArea;
