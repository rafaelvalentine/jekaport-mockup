import React from 'react'
import { Table } from 'react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { RouteList } from './TableList'
import { CardHeader as Header } from '../../theme/style/typeface'
import Pagination from '../Tools/Pagination'
import { CardWrapper } from '../Card'

export const DashboardTable = ({
  title,
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage,
  ...props
}) => {
  let header
  if (title) {
    header = (
      <Header>
        {title}
      </Header>
    )
  }
  // const newData = data.slice(0, 10)
  return (
    <CardWrapper
      width='90%'
      margin='60px 0 0'>
      <PageTable.Wrapper>
        <PageTable.Container>
          {header}
          <Table id='myTable'>
            <TableHead>
              <th />
              <th>Type of Vehicle</th>
              <th>Vehicles Model</th>
              <th>Route</th>
              <th>Price</th>
              <th>Departing Time</th>
              <th>Seats Available</th>
              <th />

            </TableHead>
            <tbody>
              <RouteList data={data}
                handleSetEditDetails={props.handleSetEditDetails}
                handleSetDeleteDetails={props.handleSetDeleteDetails}
              />
            </tbody>

          </Table>
          { setPagination ? <Pagination
            data={pageInfo}
            allUsers={allUsers}
            pageUsers={pageUsers}
            newindexOfFirstUser={newindexOfFirstUser}
            handlePagnationUp={handlePagnationUp}
            handlePagnationDown={handlePagnationDown}
            handleDataRange={handleDataRange}
            pageNumbers={pageNumbers}
            selectedPage={selectedPage}
            pageLimit={pageInfo.pageLimit}
            upperPageBound={pageInfo.upperPageBound}
            lowerPageBound={pageInfo.lowerPageBound}
          /> : null }
        </PageTable.Container>
      </PageTable.Wrapper>
    </CardWrapper>
  )
}

export default DashboardTable
