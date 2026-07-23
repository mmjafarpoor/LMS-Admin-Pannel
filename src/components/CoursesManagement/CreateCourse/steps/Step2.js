// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

import { isObjEmpty } from '@utils'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useFormContext } from "react-hook-form";

const Step2 = ({ stepper, courseTypeList, technologyList, courseLevelList, classList, termList, teacherList, statusList }) => {  

  const courseTypeOptions = courseTypeList?.map((item)=>({
    value: item.id,
    label: item.typeName
  }))

  const courseTechOptions = technologyList?.map((item)=>({
    value: item.id,
    label: item.techName
  }))

  const courseLevelOptions = courseLevelList?.map((item)=>({
    value: item.id,
    label: item.levelName
  }))
  
  const courseClassOptions = classList?.map((item)=>({
    value: item.id,
    label: item.classRoomName
  }))
  
  const courseTermOptions = termList?.map((item)=>({
    value: item.id,
    label: item.termName
  }))
  
  const courseTeacherOptions = teacherList?.map((item)=>({
    value: item.teacherId,
    label: item.fullName
  }))
  
  const courseStatusOptions = statusList?.map((item)=>({
    value: item.id,
    label: item.statusName
  }))

  // console.log(courseTypeOptions)


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    stepper.next()
}

  useEffect(()=>{
    console.log(courseTypeList)
    console.log(technologyList)
    console.log(courseLevelList)
    console.log(classList)
    console.log(statusList)

  }, [])

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>مرحله دوم</h3>
        <h4 className='text-muted'>لطفا اطلاعات خواسته شده را وارد کنید</h4>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='sessionsCount'>
              تعداد جلسات دوره 
            </Label>
            <Controller
              name="sessionsCount"
              control={control}
              rules={{ required: "انتخاب یک عدد الزامی است." }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="sessionsCount"
                  placeholder=""
                />
              )}
            />
            {errors.sessionsCount && (
              <small className="text-danger">
                {errors.sessionsCount.message}
              </small>
            )}
          </Col>
          {/* <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseTech'>
              تکنولوژی دوره
            </Label>
            <Controller
              name="courseTech"
              control={control}
              rules={{ required: "انتخاب حداقل یک تکنولوژی الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  isClearable={false}
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  options={courseTechOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.courseTech && (
              <small className="text-danger">
                {errors.courseTech.message}
              </small>
            )}
          </Col> */}
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseLevel'>
              سطح دوره
            </Label>
            <Controller
              name="courseLevel"
              control={control}
              rules={{ required: "انتخاب سطح الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseLevelOptions}
                  className='react-select'
                  classNamePrefix='select'
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.courseLevel && (
              <small className="text-danger">
                {errors.courseLevel.message}
              </small>
            )}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseClass'>
              کلاس دوره
            </Label>
            <Controller
              name="courseClass"
              control={control}
              rules={{ required: "انتخاب کلاس الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={courseClassOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.courseClass && (
              <small className="text-danger">
                {errors.courseClass.message}
              </small>
            )}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseTerm'>
              ترم دوره
            </Label>
            <Controller
              name="courseTerm"
              control={control}
              rules={{ required: "انتخاب ترم الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={courseTermOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.courseTerm && (
              <small className="text-danger">
                {errors.courseTerm.message}
              </small>
            )}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseTeacher'>
              استاد دوره
            </Label>
            <Controller
              name="courseTeacher"
              control={control}
              rules={{ required: "انتخاب استاد الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  theme={selectThemeColors}
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={courseTeacherOptions}
                  placeholder="انتخاب..."
                />
              )}
            />

            {errors.courseTeacher && (
              <small className="text-danger">
                {errors.courseTeacher.message}
              </small>
            )}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label fs-5' for='courseStatus'>
              وضعیت دوره
            </Label>
            <Controller
              name="courseStatus"
              control={control}
              rules={{ required: "انتخاب وضعیت الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  theme={selectThemeColors}
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={courseStatusOptions}
                  placeholder="انتخاب..."
                />
              )}
            />

            {errors.courseStatus && (
              <small className="text-danger">
                {errors.courseStatus.message}
              </small>
            )}
          </Col>
          <Col className='mb-1'>
            <Label className='form-label fs-5' for='courseType'>
              نوع دوره
            </Label>
            <Controller
              name="courseType"
              control={control}
              rules={{ required: "انتخاب نوع دوره الزامی است." }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={false}
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  options={courseTypeOptions}
                  placeholder="انتخاب..."
                />
              )}
            />
            {errors.courseType && (
              <small className="text-danger">
                {errors.courseType.message}
              </small>
            )}
          </Col>
          
          
        </Row>
        <div className='mt-3 d-flex justify-content-center gap-1'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next' >
            <span className='align-middle d-sm-inline-block d-none fs-4'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Step2
