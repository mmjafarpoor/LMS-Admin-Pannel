// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'

// import UsersList from "./list"

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]

const SelectReact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="fs-3" tag='h4'>فیلتر</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>نقش</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>وضعیت</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
        </Row>

        {/* <UsersList/> */}
      </CardBody>
    </Card>
  )
}
export default SelectReact
