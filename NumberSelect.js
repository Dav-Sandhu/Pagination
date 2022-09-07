const NumberSelect = ({numbers, state, setState, itemsLabel}) => {
    return(
        <>
            <label htmlFor='items'>{itemsLabel}</label>
            <select id="items" value={state} onChange={(e) => setState(parseInt(e.target.value))}>
                {numbers.map(n => {
                    return <option key={n} value={n}>{n}</option>
                })}
            </select>
        </>
    )    
}

export default NumberSelect