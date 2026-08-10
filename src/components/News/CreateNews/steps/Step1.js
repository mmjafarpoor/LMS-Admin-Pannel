import { Fragment } from 'react'
import Select from 'react-select'
import { Controller , useFormContext } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'

const Step1 = ({ stepper, newsCategoriesList }) => {

  const newsCategoriesOptions = newsCategoriesList?.map((item)=>({
    value: item.id,
    label: item.categoryName
  }))

  const isSliderOptions = [
    {value: true, label: "آره"},
    {value: false, label: "نه"},
  ]

  console.log(newsCategoriesOptions);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useFormContext();

  const onNext = async (e) => {
    e?.preventDefault();

    const isValid = await trigger([
      "title",
      "googleTitle",
      "keyword",
      "newsCategory",
      "isSlider",
    ]);

    console.log("isValid:", isValid);
    console.log("errors:", errors);

    if (isValid) {
      stepper.next();
    }
  };

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>مرحله اول</h3>
        <h4 className='text-muted'>لطفا اطلاعات خواسته شده را وارد کنید</h4>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for="title">
              عنوان خبر
            </Label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="title"
                  invalid={!!errors.title}
                />
              )}
            />
            {errors.title && (
              <FormFeedback className="d-block">
                {errors.title.message}
              </FormFeedback>
            )}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for="googleTitle">
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
                />
              )}
            />
            {errors.googleTitle && (
              <FormFeedback className="d-block">
                {errors.googleTitle.message}
              </FormFeedback>
            )}
          </Col>
        </Row>
        <Row>
          <Col className='mb-1'>
            <Label className='form-label fs-5' for="keyword">
              کلمات کلیدی
            </Label>
            <Controller
              name="keyword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="keyword"
                  invalid={!!errors.keyword}
                />
              )}
            />
            {errors.keyword && (
              <FormFeedback className="d-block">
                {errors.keyword.message}
              </FormFeedback>
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
              <FormFeedback className="d-block">
                {errors.newsCategory.message}
              </FormFeedback>
            )}
          </Col>
          <Col className='mb-1'>
            <Label className='form-label fs-5' for='isSlider'>
              اسلایدر؟
            </Label>
            <Controller
              name="isSlider"
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
            {errors.isSlider && (
              <FormFeedback className="d-block">
                {errors.isSlider.message}
              </FormFeedback>
            )}
          </Col>
        </Row>  
        <div className='mt-3 d-flex justify-content-center gap-1'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='button' color='primary' className='btn-next' onClick={onNext}>
            <span className='align-middle d-sm-inline-block d-none fs-4'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'/>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Step1
