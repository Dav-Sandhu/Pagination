import pages from './pages.json'
import { useState, useEffect } from 'react'
import NumberSelect from './NumberSelect'
import ButtonSelect from './ButtonSelect'
import DisplayElement from './DisplayElements'
import './pagination.css'

const Pagination = () => {

  const [num, setNum] = useState(15)
  const [pageNum, setPageNum] = useState(0)

  //resets the page number to 0 when a new maximum number of elements per page is selected
  useEffect(() => {
    setPageNum(0)
  }, [num])

  return (
    <div className="Pagination">
      <NumberSelect numbers={[15, 25, 50, 100]} state={num} setState={setNum} itemsLabel="Items per Page: " /><br />
      <DisplayElement pages={pages} num={num} pageNum={pageNum} /><br />
      <ButtonSelect num={num} pageNum={pageNum} setPageNum={setPageNum} pages={pages} />
    </div>
  )
}

export default Pagination