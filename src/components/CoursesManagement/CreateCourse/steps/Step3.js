// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback, Card, CardBody, CardHeader, CardTitle, CardText} from 'reactstrap'

import { useFormContext } from "react-hook-form";

const Step3 = ({ stepper }) => {
  
  const {
    control,
    handleSubmit,
  } = useFormContext();

  const onSubmit = (data) => {
    stepper.next()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>توضیحات درباره دوره</h3>
        <h4 className='text-muted'>لطفا توضیحات خود را درباره دوره بنویسید</h4>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
          <Col md='10' className='mb-1 mt-5'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>توضیح کوتاه</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='miniDescribe'
                control={control}
                render={({ field }) => (
                <Input {...field} className="fs-4" type='textarea' id='miniDescribe' rows='3' placeholder='لطفا توضیح کوتاهی درمورد دوره بنویسید' />
                )}
              />
            </CardBody>
          </Col>
          <Col md='10' className='mb-1 mt-4'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>توضیحات اصلی</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='describe'
                control={control}
                render={({ field }) => (
                <Input {...field} className="fs-4" type='textarea' id='describe' rows='10' placeholder='لطفا توضیحات اصلی دوره را بنویسید' />
                )}
              />
            </CardBody>
          </Col>
        
        <div className='mt-3 d-flex justify-content-center gap-1'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none fs-4'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
        </div>
          
      </Form>
    </Fragment>
  )
}

export default Step3
