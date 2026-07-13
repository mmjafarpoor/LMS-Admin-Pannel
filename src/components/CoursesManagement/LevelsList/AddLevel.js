// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const statusOptions = [
  { value: "user", label: "کاربر عادی" },
  { value: "teacher", label: "استاد" },
  { value: "admin", label: "ادمین" },
];

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "dutch", label: "Dutch" },
];

const defaultValues = {
  firstName: "",
  lastName: "",
  username: "",
};

const AddUser = () => {
  // ** States
  const [show, setShow] = useState(false);

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Fragment>
      <Button className="fs-4" color="primary" onClick={() => setShow(true)}>
        افزودن سطح
      </Button>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          
          <h1 className="text-center mb-2">افزودن کاربر جدید</h1>    
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="firstName">
                نام
              </Label>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="firstName"
                      placeholder=""
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  );
                }}
              />
              {errors.firstName && (
                <FormFeedback>لطفا یک اسم درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="lastName">
                نام خانوادگی
              </Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="lastName"
                    placeholder=""
                    invalid={errors.lastName && true}
                  />
                )}
              />
              {errors.lastName && (
                <FormFeedback>لطفا یک نام خانوادگی درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={12}>
              <Label className="form-label" for="username">
                نام کاربری
              </Label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder=""
                    invalid={errors.username && true}
                  />
                )}
              />
              {errors.username && (
                <FormFeedback>لطفا یک نام کاربری درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="email">
                ایمیل
              </Label>
              <Input type="email" id="email" placeholder="example@domain.com" />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="contact">
                شماره تماس
              </Label>
              <Input
                id="contact"
                defaultValue=""
                placeholder=""
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="language">
                زبان
              </Label>
              <Select
                id="language"
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={languageOptions}
                theme={selectThemeColors}
                defaultValue={languageOptions[0]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="status">
                نقش
              </Label>
              <Select
                id="status"
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={statusOptions}
                theme={selectThemeColors}
                defaultValue={statusOptions[0]}
              />
            </Col>
            
            <Col xs={12} className="text-center mt-2 pt-50">
              <Button type="submit" className="me-1" color="primary">
                تایید
              </Button>
              <Button
                type="reset"
                color="secondary"
                outline
                onClick={() => setShow(false)}
              >
                لغو
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AddUser;
