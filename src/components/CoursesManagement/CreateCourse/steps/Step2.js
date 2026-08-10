// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { Controller, useFormContext } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Button,
  Form,
  Input
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const Step2 = ({
  stepper,
  courseTypeList,
  technologyList,
  courseLevelList,
  classList,
  termList,
  teacherList,
  statusList
}) => {


  // =========================
  // Options
  // =========================

  const courseTypeOptions =
    courseTypeList?.map((item) => ({
      value: item.id,
      label: item.typeName
    })) || []


  const courseTechOptions =
    technologyList?.map((item) => ({
      value: item.id,
      label: item.techName
    })) || []


  const courseLevelOptions =
    courseLevelList?.map((item) => ({
      value: item.id,
      label: item.levelName
    })) || []


  const courseClassOptions =
    classList?.map((item) => ({
      value: item.id,
      label: item.classRoomName
    })) || []


  const courseTermOptions =
    termList?.map((item) => ({
      value: item.id,
      label: item.termName
    })) || []


  const courseTeacherOptions =
    teacherList?.map((item) => ({
      value: item.teacherId,
      label: item.fullName
    })) || []


  const courseStatusOptions =
    statusList?.map((item) => ({
      value: item.id,
      label: item.statusName
    })) || []


  // =========================
  // React Hook Form
  // =========================

  const {
    control,
    trigger,
    formState: { errors }
  } = useFormContext()


  const onNext = async () => {

    const isValid = await trigger([
      'courseType',
      'courseLevel',
      'courseClass',
      'courseStatus',
      'courseTerm',
      'courseTeacher',
      'sessionsCount'
    ])

    console.log('Step2 valid:', isValid)

    if (!isValid) {
      console.log('Step2 errors:', errors)
      return
    }

    stepper.next()
  }


  return (
    <Fragment>
      <div className="content-header">
        <h3 className="mb-0">
          مرحله دوم
        </h3>
        <h4 className="text-muted">
          لطفا اطلاعات خواسته شده را وارد کنید
        </h4>
      </div>

      <Form onSubmit={(e) => e.preventDefault()}>

        {/* Sessions Count */}

        <Row>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="sessionsCount"
            >
              تعداد جلسات دوره
            </Label>
            <Controller
              name="sessionsCount"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="sessionsCount"
                  type="text"
                  inputMode="tel"
                  min="1"
                  invalid={!!errors.sessionsCount}
                  placeholder="تعداد جلسات"
                />
              )}
            />
            {errors.sessionsCount && (
              <small className="text-danger">
                {errors.sessionsCount.message}
              </small>
            )}
          </Col>
        </Row>

        {/* Level / Class */}

        <Row>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseLevel"
            >
              سطح دوره
            </Label>
            <Controller
              name="courseLevel"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseLevel"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseLevelOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب سطح دوره..."
                />
              )}
            />
            {errors.courseLevel && (
              <small className="text-danger">
                {errors.courseLevel.message}
              </small>
            )}
          </Col>

          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseClass"
            >
              کلاس دوره
            </Label>
            <Controller
              name="courseClass"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseClass"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseClassOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب کلاس دوره..."
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

        {/* Term / Teacher */}

        <Row>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseTerm"
            >
              ترم دوره
            </Label>
            <Controller
              name="courseTerm"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseTerm"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseTermOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب ترم دوره..."
                />
              )}
            />
            {errors.courseTerm && (
              <small className="text-danger">
                {errors.courseTerm.message}
              </small>
            )}
          </Col>

          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseTeacher"
            >
              استاد دوره
            </Label>
            <Controller
              name="courseTeacher"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseTeacher"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseTeacherOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب استاد..."
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

        {/* Status / Type */}

        <Row>
          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseStatus"
            >
              وضعیت دوره
            </Label>
            <Controller
              name="courseStatus"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseStatus"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseStatusOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب وضعیت..."
                />
              )}
            />
            {errors.courseStatus && (
              <small className="text-danger">
                {errors.courseStatus.message}
              </small>
            )}
          </Col>

          <Col
            md="6"
            className="mb-1"
          >
            <Label
              className="form-label fs-5"
              for="courseType"
            >
              نوع دوره
            </Label>
            <Controller
              name="courseType"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  inputId="courseType"
                  isClearable={false}
                  theme={selectThemeColors}
                  options={courseTypeOptions}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="انتخاب نوع دوره..."
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

        {/* Buttons */}

        <div className="mt-3 d-flex justify-content-center gap-1">
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

      </Form>
    </Fragment>
  )
}

export default Step2