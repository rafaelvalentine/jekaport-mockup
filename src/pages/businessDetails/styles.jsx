import styled from 'styled-components'
import { device } from '../../components/device'


const StyleWrapper = styled.div`
width:100%
height:100%;
@media ${device.desktop}{
  .firstrow{
    justify-content: center;
  }
  .detailsrow{
    justify-content: center;
    align-items: flex-start;
  }
}
`

export default StyleWrapper