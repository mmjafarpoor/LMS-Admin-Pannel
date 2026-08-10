// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import {
  Controller,
  useFormContext
} from 'react-hook-form'

import {
  ArrowLeft,
  ArrowRight
} from 'react-feather'

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Button,
  Form,
  Input
} from 'reactstrap'


const Step3 = ({ stepper }) => {

  const {
    control,
    trigger,
    formState: { errors }
} = useFormContext();


  const onNext = async () => {

    const isValid = await trigger([
      'miniDescribe',
      'describe'
    ])

    console.log('Step3 valid:', isValid)

    if (!isValid) {
      console.log('Step3 errors:', errors)
      return
    }

    stepper.next()
  }


  return (
    <Fragment>
      <div className="content-header">
        <h3 className="mb-0">
          مرحله سوم
        </h3>
        <h4 className="text-muted">
          توضیحات درباره دوره
        </h4>
      </div>

      <Form onSubmit={(e) => e.preventDefault()}>

        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center'
          }}
        >

          {/* Mini Description */}

          <Row className="w-100">
            <Col className="mb-2">
              <Label
                className="form-label fs-5"
                for="miniDescribe"
              >
                توضیح کوتاه
              </Label>
              <Controller
                name="miniDescribe"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="miniDescribe"
                    className="fs-4"
                    type="textarea"
                    rows="4"
                    invalid={!!errors.miniDescribe}
                    placeholder="لطفا توضیح کوتاهی درمورد دوره بنویسید"
                  />
                )}
              />
              {errors.miniDescribe && (
                <small className="text-danger">
                  {errors.miniDescribe.message}
                </small>
              )}
            </Col>
          </Row>

          {/* Main Description */}

          <Row className="w-100">
            <Col className="mb-1">
              <Label
                className="form-label fs-5"
                for="describe"
              >
                توضیحات اصلی
              </Label>
              <Controller
                name="describe"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="describe"
                    className="fs-4"
                    type="textarea"
                    rows="10"
                    invalid={!!errors.describe}
                    placeholder="لطفا توضیحات اصلی دوره را بنویسید"
                  />
                )}
              />
              {errors.describe && (
                <small className="text-danger">
                  {errors.describe.message}
                </small>
              )}
            </Col>
          </Row>

          {/* Buttons */}

          <div className="mt-3 d-flex justify-content-center gap-1 w-100">
            <Button
              type="button"
              color="primary"
              className="btn-prev"
              onClick={() => stepper.previous()}
            >
              <ArrowLeft
                size={14}
                className="align-middle me-sm-25 me-0"
              />
              <span className="align-middle d-sm-inline-block d-none fs-4">
                قبلی
              </span>
            </Button>

            <Button
              type="button"
              color="primary"
              className="btn-next"
              onClick={onNext}
            >
              <span className="align-middle d-sm-inline-block d-none fs-4">
                بعدی
              </span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              />
            </Button>
          </div>
        </div>

      </Form>
    </Fragment>
  )
}

export default Step3