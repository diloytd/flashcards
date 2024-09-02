import style from "./table.module.scss";

export default function Input({ item, index, value, name, onChange }) {
    return (
        <input
            type="text"
            className={style.input}
            value={value}
            name={name}
         ></input>
    );
}
