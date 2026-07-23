// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const FormWizard = () => {
  const ref = useRef(null);
  const [stepper, setStepper] = useState(null);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.create_course);
  const filtersData = store.allData;

  console.log(filtersData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const defaultValues = {
    title: '',
    googleTitle: '',
    // courseId: '',
    courseLink: '',
    price: '',
    capacity: '',
    startDate: '',
    endDate: '',
    courseType: '',
    // courseTech: '',
    courseLevel: '',
    courseClass: '',
    courseStatus: '',
    courseTerm: '',
    courseTeacher: '',
    sessionsCount: '',
    miniDescribe: '',
    describe: '',
    photoLink: '',
  }

  const methods = useForm({
    defaultValues,
  });


  const steps = [
    {
      id: "step1",
      title: "مرحله اول",
      subtitle: "اطلاعات اولیه دوره را وارد کنید",
      icon: <FileText size={18} />,
      content: <Step1 stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "step2",
      title: "مرحله دوم",
      subtitle: "اطلاعات ثانویه دوره را وارد کنید",
      icon: <User size={18} />,
      content: (
        <Step2
          courseTypeList={filtersData?.courseTypeDtos}
          technologyList={filtersData?.technologyDtos}
          courseLevelList={filtersData?.courseLevelDtos}
          classList={filtersData?.classRoomDtos}
          termList={filtersData?.termDtos}
          teacherList={filtersData?.teachers}
          statusList={filtersData?.statusDtos}
          stepper={stepper}
          type="wizard-modern"
        />
      ),
    },
    {
      id: "step3",
      title: "مرحله سوم",
      subtitle: "توضیحات مربوط به دوره را وارد کنید",
      icon: <MapPin size={18} />,
      content: <Step3 stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "step4",
      title: "مرحله چهارم",
      subtitle: "عکس مربوط به دوره را وارد کنید",
      icon: <Link size={18} />,
      content: <Step4 stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <div className="modern-horizontal-wizard">
        <Wizard
          type="modern-horizontal"
          instance={(el) => setStepper(el)}
          ref={ref}
          steps={steps}
        />
      </div>
  </FormProvider>
  );
};

export default FormWizard;
