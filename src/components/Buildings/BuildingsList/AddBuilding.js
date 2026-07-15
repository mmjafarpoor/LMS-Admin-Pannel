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
import { addBuilding, getData } from "./store";
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { useDispatch } from "react-redux";



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
  buildingName: "",
};

const AddBuilding = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      try {
        await dispatch(
          addBuilding({
            buildingName: data.buildingName,
          })
        ).unwrap();

        dispatch(getData());
        setShow(false);

      } catch (error){
        console.log(error)
      }}

    else {
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
      <Button className="fs-5" color="primary" onClick={() => setShow(true)}>
        افزودن ساختمان
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
          
          <h1 className="text-center mb-2">افزودن ساختمان جدید</h1>    
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Label className="form-label fs-5" for="buildingName">
                نام ساختمان
              </Label>
              <Controller
                control={control}
                name="buildingName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="buildingName"
                      placeholder=""
                      value={field.value}
                      invalid={errors.buildingName && true}
                    />
                  );
                }}
              />
              {errors.buildingName && (
                <FormFeedback>لطفا یک اسم درست وارد کنید</FormFeedback>
              )}
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

export default AddBuilding;
