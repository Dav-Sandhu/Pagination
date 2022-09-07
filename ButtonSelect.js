import { useMemo } from "react"

const ButtonSelect = ({num, pageNum, setPageNum, pages}) => {
    const PageButtons = useMemo(() => {
    
        let element = []
        let cur = pageNum
        let total = pages.posts.length / num
        
        //used to check if page number is at beginning in order to decide whether or not to show previous element
        if (pageNum !== 0){
          cur = pageNum - 1
        }
    
        //shows the current, previous (if applicable) and next (also if applicable) pages buttons
        for (let i = cur;i < pageNum + 3 && i < total;i++){
          element.push(
          <span key={i}>
            <button className={pageNum === i ? "current" : ""} onClick={() => setPageNum(i)}>
              {i + 1}
            </button>&nbsp;
          </span>
        )}
    
        //shows the last page number button if it is not the current page number
        if (cur + 3 < total - 1){
          element.push(
          <span key={total - 1}>
            {`...`}&nbsp;
            <button onClick={() => setPageNum(Math.ceil(total - 1))}>
              {Math.ceil(total)}
            </button>
          </span>
        )}
    
        return element
      }, [num, pageNum, pages, setPageNum])

      return (
        <>
          {PageButtons}
        </>
      )
}

export default ButtonSelect