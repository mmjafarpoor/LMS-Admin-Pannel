// ** React Imports
import { Fragment, useEffect, useState } from "react";

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
import { getData, addClass } from "./store";
import { getBuildingData } from "../../Buildings/BuildingsList/store";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { useDispatch, useSelector } from "react-redux";

// const statusOptions = [
//   { value: "user", label: "کاربر عادی" },
//   { value: "teacher", label: "استاد" },
//   { value: "admin", label: "ادمین" },
// ];

// const countryOptions = [
//   { value: "uk", label: "UK" },
//   { value: "usa", label: "USA" },
//   { value: "france", label: "France" },
//   { value: "russia", label: "Russia" },
//   { value: "canada", label: "Canada" },
// ];

// const languageOptions = [
//   { value: "english", label: "English" },
//   { value: "spanish", label: "Spanish" },
//   { value: "french", label: "French" },
//   { value: "german", label: "German" },
//   { value: "dutch", label: "Dutch" },
// ];



const defaultValues = {
  classRoomName: "",
  capacity: "",
  buildingId: "",
};

const AddClass = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.buildings);
  const filtersData = store.allData;

  const classOptions = filtersData?.map((item)=>({
    value: item.id,
    label: item.buildingName
  }))

  useEffect(() => {
    dispatch(getBuildingData());
    console.log("========", classOptions)
  }, [dispatch]);

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
            addClass({
              classRoomName: data.classRoomName,
              capacity: data.capacity,
              id: data.buildingId,
              buildingId: data.buildingId
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
      <Button className="fs-4" color="primary" onClick={() => setShow(true)}>
        افزودن کلاس
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
          
          <h1 className="text-center mb-2">افزودن کلاس جدید</h1>    
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="classRoomName">
                نام کلاس
              </Label>
              <Controller
                control={control}
                name="classRoomName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="classRoomName"
                      placeholder=""
                      value={field.value}
                      invalid={errors.classRoomName && true}
                    />
                  );
                }}
              />
              {errors.classRoomName && (
                <FormFeedback>لطفا یک اسم درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="capacity">
                ظرفیت کلاس
              </Label>
              <Controller
                name="capacity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="capacity"
                    placeholder=""
                    invalid={errors.capacity && true}
                  />
                )}
              />
              {errors.capacity && (
                <FormFeedback>لطفا یک نام خانوادگی درست وارد کنید</FormFeedback>
              )}
            </Col>
            
            <Col xs={12}>
              <Label className="form-label" for="buildingId">
                نام ساختمان
              </Label>
              <Controller
                name="buildingId"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder= "انتخاب"
                    id="buildingId"
                    isClearable={false}
                    className="react-select"
                    classNamePrefix="select"
                    options={classOptions}
                    theme={selectThemeColors}
                    value={classOptions?.find(
                      option => option.value === field.value
                    )}
                    onChange={(option) => field.onChange(option.value)}
                  />
                )}
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

export default AddClass;
