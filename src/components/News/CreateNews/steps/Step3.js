import { Fragment } from 'react'
import { ArrowLeft } from 'react-feather'
import { useFormContext, Controller } from 'react-hook-form'
import {
  Label,
  Row,
  Col,
  Button,
  Form,
  Input,
  FormFeedback
} from 'reactstrap'
import { addNews, getData } from '../store'
import { useDispatch } from 'react-redux'

const Step3 = ({ stepper }) => {
  const {
    control,
    getValues,
    trigger,
  } = useFormContext()

  const dispatch = useDispatch()

  const onSubmit = async () => {
    // فقط فیلد image در Step 3 بررسی شود
    const isValid = await trigger(['image'])

    if (!isValid) {
      return
    }

    const data = getValues()

    console.log('داده‌های کامل فرم:', data)
    console.log('فایل انتخاب شده:', data.image)

    try {
      const formData = new FormData()
      formData.append('Title', data.title || '')
      formData.append(
        'GoogleTitle',
        data.googleTitle || ''
      )
      formData.append(
        'GoogleDescribe',
        data.googleDescribe || ''
      )
      formData.append(
        'MiniDescribe',
        data.miniDescribe || ''
      )
      formData.append(
        'Describe',
        data.describe || ''
      )
      formData.append(
        'Keyword',
        data.keyword || ''
      )
      formData.append(
        'IsSlider',
        String(data.isSlider?.value ?? false)
      )
      formData.append(
        'NewsCatregoryId',
        String(data.newsCategory?.value ?? '')
      )

      if (data.image instanceof File) {
        formData.append(
          'Image',
          data.image
        )
      }

      console.log('FormData');

      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }

      await dispatch(
        addNews(formData)
      ).unwrap()

      console.log('خبر با موفقیت ثبت شد')

      dispatch(getData())

      window.location.reload();

    } catch (error) {
      console.error(
        'خطا در ثبت خبر:',
        error
      )
    }
  }

  return (
    <Fragment>
      <h3>
        مرحله سوم
      </h3>
      <p>
        عکس خبر را آپلود کنید
      </p>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
      >
        <Row>
          <Col md="12">
            <Label for="image">
              انتخاب عکس خبر
            </Label>
            <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => {
              const file = field.value

              const formatFileSize = (bytes) => {
                if (!bytes) return ''

                if (bytes < 1024) {
                  return `${bytes} B`
                }
                if (bytes < 1024 * 1024) {
                  return `${(bytes / 1024).toFixed(1)} KB`
                }

                return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
              }

              return (
                <>
                  <div
                    style={{
                      width: '100%',
                      minHeight: '210px',
                      border: `2px dashed ${
                        fieldState.error
                          ? '#ea5455'
                          : file
                          ? '#28c76f'
                          : '#7367f0'
                      }`,
                      borderRadius: '14px',
                      backgroundColor: file
                        ? 'rgba(40, 199, 111, 0.06)'
                        : '#f8f7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Input
                      type="file"
                      id="image"
                      name={field.name}
                      innerRef={field.ref}
                      onBlur={field.onBlur}
                      onChange={(e) => {
                        const selectedFile =
                          e.target.files?.[0] || null
                        field.onChange(selectedFile)
                      }}
                      accept="image/*"
                      invalid={!!fieldState.error}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    />
                    <div
                      style={{
                        textAlign: 'center',
                        pointerEvents: 'none',
                        padding: '30px',
                        width: '100%'
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '65px',
                          height: '65px',
                          margin: '0 auto 15px',
                          borderRadius: '50%',
                          backgroundColor: file
                            ? 'rgba(40, 199, 111, 0.12)'
                            : '#eeeaff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          color: file
                            ? '#28c76f'
                            : '#7367f0'
                        }}
                      >
                        {file ? '✓' : '📷'}
                      </div>
                      {/* Title */}
                      <h5
                        style={{
                          marginBottom: '8px',
                          color: file
                            ? '#28c76f'
                            : '#4b4b4b',
                          fontWeight: 600
                        }}
                      >
                        {file
                          ? 'تصویر با موفقیت انتخاب شد'
                          : 'انتخاب عکس خبر'}
                      </h5>
                      {/* File name */}
                      {file ? (
                        <>
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '8px 16px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(40, 199, 111, 0.1)',
                              color: '#E6DDF1',
                              fontSize: '14px',
                              fontWeight: 500,
                              maxWidth: '90%',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            📄 {file.name}
                          </div>
                          <div
                            style={{
                              marginTop: '10px',
                              color: '#888',
                              fontSize: '12px'
                            }}
                          >
                            حجم فایل: {formatFileSize(file.size)}
                          </div>
                          <small
                            style={{
                              display: 'block',
                              marginTop: '8px',
                              color: '#999'
                            }}
                          >
                            برای تغییر تصویر کلیک کنید
                          </small>
                        </>
                      ) : (
                        <>
                          <p
                            style={{
                              marginBottom: '8px',
                              color: '#777',
                              fontSize: '14px'
                            }}
                          >
                            برای انتخاب عکس اینجا کلیک کنید
                          </p>
                          <small
                            style={{
                              color: '#999',
                              fontSize: '12px'
                            }}
                          >
                            JPG, JPEG, PNG, WEBP
                          </small>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Validation Error */}
                  {fieldState.error && (
                    <div
                      className="text-danger mt-50"
                      style={{
                        fontSize: '13px'
                      }}
                    >
                      {fieldState.error.message}
                    </div>
                  )}
                </>
              )
            }}
          />
          </Col>
          {/* Buttons */}
          <Col
            xs="12"
            className="d-flex justify-content-between mt-2"
          >
            <Button
              type="button"
              color="secondary"
              className="btn-prev"
              onClick={() =>
                stepper.previous()
              }
            >
              <ArrowLeft
                size={14}
                className="align-middle me-sm-50"
              />
              <span className="align-middle d-sm-inline-block d-none">
                قبلی
              </span>
            </Button>
            <Button
              type="submit"
              color="primary"
            >
              تایید
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default Step3
