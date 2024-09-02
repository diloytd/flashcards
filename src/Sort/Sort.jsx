import style from "./sort.module.scss";
export default function Sort({ option, value, onChange, name, defaultValue }) {
    return (
        <>
            <select
                className={style.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option>{defaultValue}</option>
                <option>{name}</option>
            </select>
        </>
    );
}
