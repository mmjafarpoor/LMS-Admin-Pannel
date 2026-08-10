// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Controller, useFormContext } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import {
  Form,
  Label,
  Input,
  Row,
  Col,
  Button
} from 'reactstrap'

const Step1 = ({ stepper }) => {

  const {
    control,
    trigger,
    formState: { errors }
  } = useFormContext()

  const onNext = async(data) => {
    const isValid = await trigger([
      'title',
      'googleTitle',
      'courseLink',
      'price',
      'capacity',
      'startDate',
      'endDate'
    ])
    console.log('Step1 valid:', isValid);

    console.log('VALID:', isValid)
    console.log('ERRORS:', errors)

    if (!isValid) {
      console.log('Step1 errors:', errors)
      return
    }

    stepper.next()
  }

  return (
    <Fragment>

      <div className="content-header">
        <h3 className="mb-0">
          مرحله اول
        </h3>
        <h4 className="text-muted">
          لطفا اطلاعات خواسته شده را وارد کنید
        </h4>
      </div>

      <Form onSubmit={(e) => e.preventDefault()}>

        {/* Title */}

        <Row>
          <Col md="6" className="mb-1">
            <Label
              className="form-label fs-5"
              for="title"
            >
              عنوان دوره
            </Label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="title"
                  invalid={!!errors.title}
                  placeholder="عنوان دوره را وارد کنید"
                />
              )}
            />
            {errors.title && (
              <small className="text-danger">
                {errors.title.message}
              </small>
            )}
          </Col>
          {/* Google Title */}

          <Col md="6" className="mb-1">
            <Label
              className="form-label fs-5"
              for="googleTitle"
            >
              عنوان گوگل
            </Label>
            <Controller
              name="googleTitle"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="googleTitle"
                  invalid={!!errors.googleTitle}
                  placeholder="عنوان مناسب برای گوگل"
                />
              )}
            />
            {errors.googleTitle && (
              <small className="text-danger">
                {errors.googleTitle.message}
              </small>
            )}
          </Col>
        </Row>

        {/* Course Link */}

        <Row>
          <Col className="mb-1">
            <Label
              className="form-label fs-5"
              for="courseLink"
            >
              لینک دوره
            </Label>
            <Controller
              name="courseLink"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="courseLink"
                  invalid={!!errors.courseLink}
                  placeholder="لینک دوره را وارد کنید"
                />
              )}
            />
            {errors.courseLink && (
              <small className="text-danger">
                {errors.courseLink.message}
              </small>
            )}
          </Col>
        </Row>

        {/* Price / Capacity */}

        <Row>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="price"
            >
              قیمت دوره (تومان)
            </Label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="price"
                  type="text"
                  inputMode="tel"
                  min="0"
                  invalid={!!errors.price}
                  placeholder="قیمت دوره"
                />
              )}
            />
            {errors.price && (
              <small className="text-danger">
                {errors.price.message}
              </small>
            )}
          </Col>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="capacity"
            >
              ظرفیت دوره
            </Label>
            <Controller
              name="capacity"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="capacity"
                  type="text"
                  inputMode="tel"
                  min="1"
                  invalid={!!errors.capacity}
                  placeholder="ظرفیت دوره"
                />
              )}
            />
            {errors.capacity && (
              <small className="text-danger">
                {errors.capacity.message}
              </small>
            )}
          </Col>
        </Row>

        {/* Start / End Date */}

        <Row>
          <Col md="6" className="mb-1">
            <Label
              className="form-label fs-5"
              for="startDate"
            >
              تاریخ شروع
            </Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="startDate"
                  type="date"
                  invalid={!!errors.startDate}
                />
              )}
            />
            {errors.startDate && (
              <small className="text-danger">
                {errors.startDate.message}
              </small>
            )}
          </Col>
          <Col md="6" className="mb-1">
            <Label
              className="form-label fs-5"
              for="endDate"
            >
              تاریخ پایان
            </Label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="endDate"
                  type="date"
                  invalid={!!errors.endDate}
                />
              )}
            />
            {errors.endDate && (
              <small className="text-danger">
                {errors.endDate.message}
              </small>
            )}
          </Col>
        </Row>

        {/* Buttons */}

        <div className="mt-3 d-flex justify-content-center gap-1">

          <Button
            type="button"
            color="secondary"
            className="btn-prev"
            outline
            disabled
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
      </Form>
    </Fragment>
  )
}

export default Step1