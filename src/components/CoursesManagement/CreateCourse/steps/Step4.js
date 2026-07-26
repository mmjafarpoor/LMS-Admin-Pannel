// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback, Card, CardBody, CardHeader, CardTitle, CardText} from 'reactstrap'

import { useFormContext } from "react-hook-form";
import { addCourse, getData } from '../store';
import { useDispatch } from 'react-redux';

const Step4 = ({ stepper }) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log("submited data: ", data);

    try {
      await dispatch(
        addCourse({
          Title: data.title,
          GoogleTitle: data.googleTitle,
          Capacity: data.capacity,
          Cost: data.price,
          SessionNumber: data.sessionsCount,
          MiniDescribe: data.miniDescribe,
          Describe: data.describe,
          ImageAddress: data.photoLink,
          Image: data.photoLink,
          StartTime: data.startDate,
          EndTime: data.endDate,
          UniqeUrlString: data.courseLink,
          ClassId: data.courseClass.value,
          TremId: data.courseTerm.value,
          CourseLvlId: data.courseLevel.value,
          TeacherId: data.courseTeacher.value,
          courseType: data.courseType.value,
          CourseStatusId: data.courseStatus.value,
          CurrentCoursePaymentNumber: 0,
          GoogleSchema: "idk",
          ShortLink: "",
        })
      ).unwrap();

      window.location.reload();

      dispatch(getData());
      setShow(false);
      

    } catch (error){
      console.log(error)
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>مرحله چهارم</h3>
        <h4 className='text-muted'>عکس دوره را آپلود کنید یا لینک آن را قرار دهید</h4>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
          <Col md='10' className='mb-1 mt-5'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>لینک عکس</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='photoLink'
                control={control}
                render={({ field }) => (
                <Input {...field} className="fs-4" type='textarea' id='photoLink' rows='10' placeholder='لینک عکس را وارد کنید' />
                )}
              />
            </CardBody>
          </Col>
        <div className='mt-3 d-flex flex-column align-items-center gap-1'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='submit' color='success' className='btn-submit fs-4'>
            تایید
          </Button>
        </div>
        </div>
          
      </Form>
    </Fragment>
  )
}

export default Step4
