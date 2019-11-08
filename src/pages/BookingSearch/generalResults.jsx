import React, { useState, useEffect } from 'react'
import { ListWrapper } from '../../theme/style/styles'
import { ResultCard } from '../../components/Card'
import Pagination from '../../components/Tools/Pagination'
import { Scrollbars } from 'react-custom-scrollbars'
import { ListWrapperContainer } from './styles'
const GeneralResults = ({ ...props }) => {
  const [page, setPage] = useState({
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 5,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    data: [] })
  const scrollToTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  const handlePagnationUp = e => {
    e.target.blur()
    if (page.currentPage >= page.firstPage) {
      setPage({ ...page, currentPage: page.currentPage + 1 })
    }
    if (page.currentPage === page.upperPageBound) {
      let upperPageBound = page.upperPageBound + page.pageLimit
      let lowerPageBound = page.lowerPageBound + page.pageLimit
      setPage({ ...page, upperPageBound, lowerPageBound })
    }
  }
  const handlePagnationDown = e => {
    e.target.blur()
    if (page.currentPage === page.lowerPageBound + 1) {
      let upperPageBound = page.upperPageBound - page.pageLimit
      let lowerPageBound = page.lowerPageBound - page.pageLimit
      setPage({ ...page, upperPageBound, lowerPageBound })
    }
    if (page.currentPage !== page.firstPage) {
      setPage({ ...page, currentPage: page.currentPage - 1 })
    }
  }
  const handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      renderPageNumbers()
      scrollToTop()
    }

    let numberToShow = Number(e.target.value)
    return setPage({ ...page, usersPerPage: numberToShow, currentPage: 1 }, () => setTimeout(() => {
      callback()
    }, 100))
  }

  const renderPageNumbers = () => {
    let pageList = []
    let length = Math.ceil(page.data.length / page.usersPerPage)
    for (let index = 1; index <= length; index++) {
      const element = {
        id: index,
        page: index
      }
      pageList.push(element)
    }
    return pageList
  }
  const selectedPage = currentPage => {
    scrollToTop()
    setPage({ ...page, currentPage })
  }
  const indexOfLastUser = page.currentPage * page.usersPerPage
  const indexOfFirstUser = indexOfLastUser - page.usersPerPage
  const currentUsers = page.data.slice(indexOfFirstUser, indexOfLastUser)
  const allUsers = page.data.length
  let newindexOfFirstUser = indexOfFirstUser + 1
  let pageUsers = currentUsers.length + indexOfFirstUser
  const _ResultCard = currentUsers.map(data => (
    <ResultCard key={Math.random()} {...data} />
  ))
  useEffect(() => {
    setPage({ ...page, data: props.data })
  }, [props.data])
  return (
    <ListWrapperContainer>
      <Scrollbars autoHide style={{ height: '100%', width:'950px' }}>
       <ListWrapper
         {...props} >
         {_ResultCard}
       </ListWrapper>
     </Scrollbars>
      <Pagination
        className='bookingpagination'
        data={page}
        allUsers={allUsers}
        pageUsers={pageUsers}
        newindexOfFirstUser={newindexOfFirstUser}
        handlePagnationUp={handlePagnationUp}
        handlePagnationDown={handlePagnationDown}
        handleDataRange={handleDataRange}
        pageNumbers={renderPageNumbers}
        selectedPage={selectedPage}
        pageLimit={page.pageLimit}
        upperPageBound={page.upperPageBound}
        lowerPageBound={page.lowerPageBound}
      />
    </ListWrapperContainer>
  )
}

export default GeneralResults
