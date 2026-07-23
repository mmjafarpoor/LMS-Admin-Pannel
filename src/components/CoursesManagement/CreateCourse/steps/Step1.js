// ** React Imports
import { Fragment } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'
import { useFormContext } from "react-hook-form";

const Step1 = ({ stepper }) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    stepper.next()
    // console.log("data:", data);
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>مرحله اول</h3>
        <h4 className='text-muted'>لطفا اطلاعات خواسته شده را وارد کنید</h4>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for="title">
              عنوان دوره
            </Label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "انتخاب یک عنوان الزامی است." }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="title"
                  placeholder=""
                />
              )}
            />
            {errors.title && (
              <small className="text-danger">
                {errors.title.message}
              </small>
            )}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for="googleTitle">
              عنوان گوگل
            </Label>
            <Controller
              name="googleTitle"
              control={control}
              rules={{ required: "انتخاب یک عنوان الزامی است." }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="googleTitle"
                  placeholder=""
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
        <Row>
          {/* <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseId'>
              شناسه دوره
            </Label>
            <Controller
              id='courseId'
              name='courseId'
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Col> */}
          <Col className='mb-1'>
            <Label className='form-label fs-5' for="courseLink">
              لینک دوره
            </Label>
            <Controller
              control={control}
              id='courseLink'
              name='courseLink'
              render={({ field }) => (
                <Input {...field} id='courseLink'/>
              )}
            />
          </Col>
        </Row>
        <Row>
          <div className='form-label col-md-6 mb-1'>
            <Label className='form-label fs-5' for='price'>
              قیمت دوره (تومان)
            </Label>
            <Controller
              id='price'
              name='price'
              control={control}
              render={({ field }) => <Input type='text' {...field} />}
            />
          </div>
          <div className='form-label-toggle col-md-6 mb-1'>
            <Label className='form-label fs-5' for='capacity'>
             ظرفیت دوره 
            </Label>
            <Controller
              control={control}
              id='capacity'
              name='capacity'
              render={({ field }) => <Input type='text' {...field} />}
            />
          </div>
        </Row>
        <Row>
          <div className='form-label col-md-6 mb-1'>
            <Label className='form-label fs-5' for='startDate'>
              تاریخ شروع
            </Label>
            <Controller
              id='startDate'
              name='startDate'
              control={control}
              render={({ field }) => <Input type='text' {...field} />}
            />
          </div>
          <div className='form-label-toggle col-md-6 mb-1'>
            <Label className='form-label fs-5' for='endDate'>
              تاریخ پایان 
            </Label>
            <Controller
              control={control}
              id='endDate'
              name='endDate'
              render={({ field }) => <Input type='text' {...field} />}
            />
          </div>
        </Row>
        <div className='mt-3 d-flex justify-content-center gap-1'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none fs-4'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Step1
