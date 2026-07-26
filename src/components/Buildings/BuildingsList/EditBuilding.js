// ** React Imports
import { Fragment, useState , useEffect } from "react";
import { updateBuilding, getBuildingData } from "./store/index";
import { useDispatch } from "react-redux";

// ** Reactstrap Imports
import {Card, Row, Col, Modal, Input, Label, Button, CardBody, CardText, CardTitle, ModalBody, ModalHeader, FormFeedback,} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const defaultValues = {
  id: "",
  buildingName: "",
  floor: "",
  latitude: "",
  longitude: "",
  active: true,
};

const AddUser = ({ building }) => {
  // ** States
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  // ** Hooks
  const {control, reset, setError, handleSubmit, formState: { errors },} = useForm({ defaultValues });

  const onSubmit = async (data) => {
    try {
      const values = {
        id: building.id,
        buildingName: data.buildingName,
        floor: Number(data.floor),
        latitude: data.latitude,
        longitude: data.longitude,
        active: data.active,
      };

      await dispatch(updateBuilding(values)).unwrap();
      await dispatch(getBuildingData());

      setShow(false);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    if (building && show) {
      reset({
        buildingName: building.buildingName,
        floor: building.floor,
        latitude: building.latitude,
        longitude: building.longitude,
        active: building.active,
      });
    }
  }, [building, show, reset]);

  return (
    <Fragment>
      <Button color="primary" onClick={() => setShow(true)}>
        ویرایش
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
          
          <h1 className="text-center mb-2">ویرایش ساختمان</h1>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="buildingName">
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
                <FormFeedback>لطفاً نام ساختمان را وارد کنید.</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="floor">
                طبقه ساختمان
              </Label>
              <Controller
                name="floor"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="floor"
                    placeholder=""
                    invalid={errors.floor && true}
                  />
                )}
              />
              {errors.floor && (
                <FormFeedback>لطفاً طبقه را وارد کنید.</FormFeedback>
              )}
            </Col>
            <Col xs={12}>
              <Label className="form-label me-1" for="active">
                فعال
              </Label>
              <Controller
                name="active"
                control={control}
                render={({ field }) => (
                    <Input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                    />
                )}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="latitude"> عرض جغرافیایی </Label>
              <Controller
                name="latitude"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="latitude"
                    invalid={errors.latitude && true}
                  />
                )}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="longitude"> طول جغرافیایی </Label>
              <Controller
                name="longitude"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="longitude"
                    invalid={errors.longitude && true}
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

export default AddUser;
