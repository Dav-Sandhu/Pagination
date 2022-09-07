const DisplayElement = ({pages, num, pageNum}) => {
    return (
        <>
            {
                pages.posts.slice(num * pageNum, num * pageNum + num).map(p => {
                    return <div key={p.id}>{`${p.id}: ${p.author}`}</div>
                })
            }
        </>
    )
}

export default DisplayElement