 export default function Button ({onClick, children}) {
    return (
        <>
        <button className="buttonOk" onClick={onClick}>
            <span>
                {children}
            </span>
        </button>
        </>
    );
}