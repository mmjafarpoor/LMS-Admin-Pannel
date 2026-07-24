// ** React Imports
import { Fragment } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import * as yup from 'yup'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'
import { useFormContext } from "react-hook-form";

const Step1 = ({ stepper, newsCategoriesList }) => {

  const newsCategoriesOptions = newsCategoriesList?.map((item)=>({
    value: item.id,
    label: item.categoryName
  }))

  const isSliderOptions = [
    {value: true, label: "آره"},
    {value: false, label: "نه"},
  ]

  console.log(newsCategoriesOptions)

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
              عنوان خبر
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
          <Col className='mb-1'>
            <Label className='form-label fs-5' for="keywords">
              کلمات کلیدی
            </Label>
            <Controller
              name="keywords"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="keywords"
                  placeholder=""
                />
              )}
            />
            {errors.keywords && (
              <small className="text-danger">
                {errors.keywords.message}
              </small>
            )}
          </Col>
        </Row>
        <Row>
          <Col className='mb-1'>
            <Label className='form-label fs-5' for='newsCategory'>
              دسته‌بندی خبر
            </Label>
            <Controller
              name="newsCategory"
              control={control}
              rules={{ required: "انتخاب دسته‌بندی خبر الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={newsCategoriesOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.newsCategory && (
              <small className="text-danger">
                {errors.newsCategory.message}
              </small>
            )}
          </Col>
          <Col className='mb-1'>
            <Label className='form-label fs-5' for='slider'>
              اسلایدر؟
            </Label>
            <Controller
              name="slider"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={isSliderOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.slider && (
              <small className="text-danger">
                {errors.slider.message}
              </small>
            )}
          </Col>
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
