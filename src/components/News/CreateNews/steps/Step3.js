import { Fragment } from 'react'
import { ArrowLeft } from 'react-feather'
import { useFormContext , Controller } from 'react-hook-form'
import { Label, Row, Col, Button, Form, Input, FormFeedback, Card, CardBody, CardHeader, CardTitle, CardText} from 'reactstrap'
import { addNews, getData } from '../store';
import { useDispatch } from 'react-redux';

const Step3 = ({ stepper }) => {
  const {
    control,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const dispatch = useDispatch();

  const onSubmit = async () => {

    const isValid = await trigger(["image"]);

    console.log("image valid?", isValid);
    console.log("errors:", errors);

    if (!isValid) return

    const data = getValues()
    console.log("مقدار image:", data.image)
    console.log("داده‌های کامل فرم:", data)

    try {
      const payload = {
        Title: data.title,
        GoogleTitle: data.googleTitle,
        GoogleDescribe: data.googleDescribe,
        MiniDescribe: data.miniDescribe,
        Describe: data.describe,
        Image: data.image || "",
        Keyword: data.keyword || "",
        IsSlider: data.isSlider?.value ?? false,
        NewsCatregoryId: data.newsCategory?.value,
      }

      console.log("payload ارسالی:", payload)

      await dispatch(addNews(payload)).unwrap()
      
      dispatch(getData())
      // window.location.reload();

    } catch (error) {
      console.error("خطا در ثبت خبر:", error)
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>مرحله سوم</h3>
        <h4 className='text-muted'>عکس خبر را آپلود کنید یا لینک آن را قرار دهید</h4>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
          <Col md='10' className='mb-1 mt-5'>
            <CardHeader>
              <CardTitle className="mb-1" tag='h3'>لینک عکس</CardTitle>
            </CardHeader>
            <CardBody>
              <Controller
                name='image'
                control={control}
                render={({ field }) => (
                  <Input {...field} value={field.value || ""} onChange={(e) => field.onChange(e.target.value)} className="fs-4" type='textarea' id='image' rows='10' placeholder='لینک عکس را وارد کنید' invalid={!!errors.image}/>
                )}
              />
              {errors.image && (
                <FormFeedback className="d-block">{errors.image.message}</FormFeedback>
              )}
            </CardBody>
          </Col>
        <div className='mt-3 d-flex flex-column align-items-center gap-1'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none fs-4'>قبلی</span>
          </Button>
          <Button type='button' color='success' className='btn-submit fs-4' onClick={onSubmit}>
            تایید
          </Button>
        </div>
        </div>
          
      </Form>
    </Fragment>
  )
}

export default Step3

