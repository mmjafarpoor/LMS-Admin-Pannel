// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const roleColors = {
  editor: 'light-info',
  admin: 'light-danger',
  author: 'light-warning',
  maintainer: 'light-success',
  subscriber: 'light-primary'
}

const statusColors = {
  active: 'light-success',
  notActive: 'light-warning',
  inactive: 'light-secondary'
}

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const MySwal = withReactContent(Swal)

const NewsInfoCard = ({ selectedNews }) => {
  // ** State
  const [show, setShow] = useState(false)
  // console.log("card info:", selectedNews);

  
  // ** Hook
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: selectedNews?.title,
    }
  })

  // ** render user img
  const renderUserImg = () => {
    if (selectedNews?.currentImageAddress?.length) {
      return (
        <img
          height='110'
          width='110'
          alt='user-avatar'
          src={selectedNews?.currentImageAddress}
          className='img-fluid rounded mt-3 mb-2'
        />
      )
    } else {
      return (
        <Avatar
          initials
          color={'light-primary'}
          className='rounded mt-3 mb-2'
          content={selectedNews?.title}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(48px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '110px',
            width: '110px'
          }}
        />
      )
    }
  }

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleReset = () => {
    reset({
      title: selectedNews?.title,
    })
  }

  const handleSuspendedClick = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Suspend user!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Suspended!',
          text: 'User has been suspended.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Cancelled Suspension :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  if (!selectedNews) return <div>درحال بارگذاری...</div>;

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              {renderUserImg()}
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{selectedNews !== null ? `${selectedNews?.title}` : 'Eleanor Aguilar'}</h4>
                </div>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1 fs-3'>جزئیات</h4>
          <div className='info-container'>
            {selectedNews !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>توضیحات:</span>
                  <span>{selectedNews?.describe}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>وضعیت:</span>
                  <Badge className='text-capitalize fs-5' color={statusColors[selectedNews?.active? "active": "notActive"]}> 
                    {selectedNews?.active ? "فعال": "غیرفعال"}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>دسته بندی:</span>
                  <span>{selectedNews?.newsCatregoryName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>تعداد بازدید:</span>
                  <span className='text-capitalize'>{selectedNews?.currentView}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>تاریخ ثبت:</span>
                  <span>{selectedNews?.insertDate}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 fs-4'>تاریخ آخرین تغییر:</span>
                  <span>{selectedNews?.updateDate}</span>
                </li>
              </ul>
            ) : null}
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              ویرایش
            </Button>
            <Button className='ms-1' color='danger' outline onClick={handleSuspendedClick}>
              غیرفعال کردن
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>تغییر اطلاعات کاربر</h1>
            <p className='fs-4'>به‌روزرسانی اطلاعات کاربر مشمول ارزیابی حریم خصوصی خواهد شد.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
                <Label className='form-label' for='fName'>
                  نام
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='fName'
                  name='fName'
                  render={({ field }) => (
                    <Input {...field} id='fName' placeholder='John' invalid={errors.fName && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='lName'>
                  نام خانوادگی
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='lName'
                  name='lName'
                  render={({ field }) => (
                    <Input {...field} id='lName' placeholder='Doe' invalid={errors.lName && true} />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='userName'>
                  نام کاربری
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='userName'
                  name='userName'
                  render={({ field }) => (
                    <Input {...field} id='userName' placeholder='john.doe.007' invalid={errors.userName && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='billing-email'>
                  ایمیل
                </Label>
                <Input
                  type='email'
                  id='billing-email'
                  defaultValue={""}
                  placeholder='example@domain.com'
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='status'>
                  وضعیت
                </Label>
                <Select
                  id='status'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={statusOptions}
                  theme={selectThemeColors}
                  defaultValue={""}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='contact'>
                  شماره تماس
                </Label>
                <Input id='contact' defaultValue={""} placeholder='+1 609 933 4422' />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='language'>
                  زبان
                </Label>
                <Select
                  id='language'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={languageOptions}
                  theme={selectThemeColors}
                  defaultValue={languageOptions[0]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='country'>
                  کشور
                </Label>
                <Select
                  id='country'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={countryOptions}
                  theme={selectThemeColors}
                  defaultValue={countryOptions[0]}
                />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  تایید
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  onClick={() => {
                    handleReset()
                    setShow(false)
                  }}
                >
                  لغو
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default NewsInfoCard
