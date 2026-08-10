import { Fragment } from 'react'

import { ArrowLeft } from 'react-feather'
import { Controller, useFormContext } from 'react-hook-form'

import {
  Label,
  Row,
  Col,
  Button,
  Form,
  Input,
  FormFeedback
} from 'reactstrap'

import { addCourse, getData } from '../store'
import { useDispatch } from 'react-redux'

const Step4 = ({ stepper }) => {

  const {
    control,
    trigger,
    getValues
  } = useFormContext()

  const dispatch = useDispatch()

  const onSubmit = async () => {

    // فقط عکس Step 4 را validate کن
    const isValid = await trigger(['image'])

    if (!isValid) {
      return
    }

    const data = getValues()

    console.log('Course Data:', data)
    console.log('Selected Image:', data.image)

    try {

      const formData = new FormData()

      // Step 1

      formData.append(
        'Title',
        data.title || ''
      )

      formData.append(
        'GoogleTitle',
        data.googleTitle || ''
      )

      formData.append(
        'Capacity',
        String(data.capacity || '')
      )

      formData.append(
        'Cost',
        String(data.price || '')
      )

      // Step 2

      formData.append(
        'SessionNumber',
        String(data.sessionsCount || '')
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
        'StartTime',
        data.startDate || ''
      )

      formData.append(
        'EndTime',
        data.endDate || ''
      )

      formData.append(
        'UniqeUrlString',
        data.courseLink || ''
      )

      formData.append(
        'ClassId',
        String(data.courseClass?.value || '')
      )

      formData.append(
        'TremId',
        String(data.courseTerm?.value || '')
      )

      formData.append(
        'CourseLvlId',
        String(data.courseLevel?.value || '')
      )

      formData.append(
        'TeacherId',
        String(data.courseTeacher?.value || '')
      )

      formData.append(
        'courseType',
        String(data.courseType?.value || '')
      )

      formData.append(
        'CourseStatusId',
        String(data.courseStatus?.value || '')
      )

      // Default values

      formData.append(
        'CurrentCoursePaymentNumber',
        '0'
      )

      formData.append(
        'GoogleSchema',
        'idk'
      )

      formData.append(
        'ShortLink',
        ''
      )

      // Image

      if (data.image instanceof File) {

        formData.append(
          'Image',
          data.image
        )
        
      }

      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }

      await dispatch(
        addCourse(formData)
      ).unwrap()

      console.log('دوره با موفقیت ثبت شد')

      window.location.reload()

    } catch (error) {

      console.error(
        'خطا در ثبت دوره:',
        error
      )

    }
  }

  return (
    <Fragment>

      <div className="content-header">
        <h3 className="mb-0">
          مرحله چهارم
        </h3>

        <h4 className="text-muted">
          عکس دوره را آپلود کنید
        </h4>
      </div>

      <Form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
      >

        <Row>
          <Col xs="12">
            <Label
              className="form-label fs-5"
              for="image"
            >
              انتخاب عکس دوره
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
                    return `${(
                      bytes / 1024
                    ).toFixed(1)} KB`
                  }

                  return `${(
                    bytes /
                    (1024 * 1024)
                  ).toFixed(1)} MB`
                }

                return (
                  <>
                    <div
                      style={{
                        width: '100%',
                        minHeight: '220px',
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
                        position: 'relative',
                        overflow: 'hidden',
                        transition:
                          'all 0.25s ease'
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

                          field.onChange(
                            selectedFile
                          )
                        }}
                        accept="image/jpeg,image/png,image/webp"
                        invalid={
                          !!fieldState.error
                        }
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
                            margin:
                              '0 auto 15px',
                            borderRadius: '50%',
                            backgroundColor: file
                              ? 'rgba(40, 199, 111, 0.12)'
                              : '#eeeaff',
                            display: 'flex',
                            alignItems:
                              'center',
                            justifyContent:
                              'center',
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
                            : 'انتخاب عکس دوره'}
                        </h5>

                        {/* File */}

                        {file ? (
                          <>
                            <div
                              style={{
                                display:
                                  'inline-flex',
                                alignItems:
                                  'center',
                                gap: '8px',
                                padding:
                                  '8px 16px',
                                borderRadius:
                                  '8px',
                                backgroundColor:
                                  'rgba(40, 199, 111, 0.1)',
                                color: '#444',
                                fontSize: '14px',
                                fontWeight: 500,
                                maxWidth: '90%',
                                overflow:
                                  'hidden',
                                textOverflow:
                                  'ellipsis',
                                whiteSpace:
                                  'nowrap'
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
                              حجم فایل:{' '}
                              {formatFileSize(
                                file.size
                              )}
                            </div>
                            <small
                              style={{
                                display: 'block',
                                marginTop: '8px',
                                color: '#999'
                              }}
                            >
                              برای تغییر تصویر
                              کلیک کنید
                            </small>
                          </>
                        ) : (
                          <>
                            <p
                              style={{
                                marginBottom:
                                  '8px',
                                color: '#777',
                                fontSize: '14px'
                              }}
                            >
                              برای انتخاب عکس
                              اینجا کلیک کنید
                            </p>
                            <small
                              style={{
                                color: '#999',
                                fontSize: '12px'
                              }}
                            >
                              JPG, JPEG, PNG, WEBP
                              {' — '}
                              حداکثر 5MB
                            </small>
                          </>
                        )}
                      </div>
                    </div>
                    {fieldState.error && (
                      <FormFeedback
                        className="d-block"
                      >
                        {fieldState.error.message}
                      </FormFeedback>
                    )}
                  </>
                )
              }}
            />
          </Col>
        </Row>
        <div className="mt-3 d-flex justify-content-between">
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
              className="align-middle me-sm-25 me-0"
            />
            <span className="align-middle d-sm-inline-block d-none fs-4">
              قبلی
            </span>
          </Button>
          <Button
            type="submit"
            color="primary"
            className="btn-next"
          >
            <span className="align-middle d-sm-inline-block d-none fs-4">
              تایید
            </span>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Step4