import { Fragment } from 'react'
import { useFormContext , Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, Row, Col, Button, Form, Input, FormFeedback, Card, CardBody, CardHeader, CardTitle, CardText} from 'reactstrap'

const Step2 = ({ stepper }) => {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  const onNext = async() => {
    const isValid = await trigger([
      "googleDescribe",
      "miniDescribe",
      "describe",
    ]);
    if (isValid) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>توضیحات درباره دوره</h3>
        <h4 className='text-muted'>لطفا توضیحات خود را درباره خبر بنویسید</h4>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
          <Col md='10' className='mb-1 mt-5'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>توضیح گوگل</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='googleDescribe'
                control={control}
                render={({ field }) => (
                <Input {...field} className="fs-4" type='textarea' id='googleDescribe' rows='2' placeholder='لطفا توضیح گوگلی درمورد خبر بنویسید' invalid={!!errors.googleDescribe}/>
                )}
              />
              {errors.googleDescribe && (
                <FormFeedback className="d-block">{errors.googleDescribe.message}</FormFeedback>
              )}
            </CardBody>
          </Col>
          <Col md='10' className='mb-1 mt-5'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>توضیح کوتاه</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='miniDescribe'
                control={control}
                render={({ field }) => (
                <Input {...field} className="fs-4" type='textarea' id='miniDescribe' rows='4' placeholder='لطفا توضیح کوتاهی درمورد خبر بنویسید' invalid={!!errors.miniDescribe}/>
                )}
              />
              {errors.miniDescribe && (
                <FormFeedback className="d-block">{errors.miniDescribe.message}</FormFeedback>
              )}
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
                <Input {...field} className="fs-4" type='textarea' id='describe' rows='10' placeholder='لطفا توضیحات اصلی خبر را بنویسید' invalid={!!errors.describe}/>
                )}
              />
              {errors.describe && (
                <FormFeedback className="d-block">{errors.describe.message}</FormFeedback>
              )}
            </CardBody>
          </Col>
        
        <div className='mt-3 d-flex justify-content-center gap-1'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='button' color='primary' className='btn-next' onClick={onNext}>
            <span className='align-middle d-sm-inline-block d-none fs-4'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
        </div>
          
      </Form>
    </Fragment>
  )
}

export default Step2