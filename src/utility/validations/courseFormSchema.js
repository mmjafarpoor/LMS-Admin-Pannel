import * as yup from 'yup'

export const courseFormSchema = yup.object().shape({

  // =========================
  // Step 1
  // =========================

    title: yup
        .string()
        .required('عنوان دوره الزامی است')
        .min(5, 'عنوان دوره باید حداقل ۵ کاراکتر باشد')
        .max(100, 'عنوان دوره نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد'),

    googleTitle: yup
        .string()
        .required('عنوان گوگل الزامی است')
        .min(5, 'عنوان گوگل باید حداقل ۵ کاراکتر باشد')
        .max(70, 'عنوان گوگل بهتر است کمتر از ۷۰ کاراکتر باشد'),

    courseLink: yup
        .string(),

    price: yup
        .number()
        .typeError('قیمت باید عدد باشد')
        .required('قیمت دوره الزامی است')
        .min(0, 'قیمت نمی‌تواند منفی باشد'),

    capacity: yup
        .number()
        .typeError('ظرفیت باید عدد باشد')
        .required('ظرفیت دوره الزامی است')
        .integer('ظرفیت باید عدد صحیح باشد')
        .min(1, 'ظرفیت باید حداقل ۱ نفر باشد'),

    startDate: yup
        .string()
        .required('تاریخ شروع الزامی است'),

    endDate: yup
        .string()
        .required('تاریخ پایان الزامی است'),

    // =========================
    // Step 2
    // =========================

    sessionsCount: yup
        .number()
        .typeError('تعداد جلسات باید عدد باشد')
        .required('تعداد جلسات الزامی است')
        .integer('تعداد جلسات باید عدد صحیح باشد')
        .min(1, 'تعداد جلسات باید حداقل ۱ باشد'),

    courseLevel: yup
        .object()
        .nullable()
        .required('انتخاب سطح دوره الزامی است'),

    courseClass: yup
        .object()
        .nullable()
        .required('انتخاب کلاس دوره الزامی است'),

    courseTerm: yup
        .object()
        .nullable()
        .required('انتخاب ترم دوره الزامی است'),

    courseTeacher: yup
        .object()
        .nullable()
        .required('انتخاب استاد دوره الزامی است'),

    courseStatus: yup
        .object()
        .nullable()
        .required('انتخاب وضعیت دوره الزامی است'),

    courseType: yup
        .object()
        .nullable()
        .required('انتخاب نوع دوره الزامی است'),

    // =========================
    // Step 3
    // =========================

    miniDescribe: yup
        .string()
        .required('توضیح کوتاه الزامی است')
        .min(30, 'توضیح کوتاه باید حداقل ۳۰ کاراکتر باشد')
        .max(500, 'توضیح کوتاه نمی‌تواند بیشتر از ۵۰۰ کاراکتر باشد'),

    describe: yup
        .string()
        .required('توضیحات اصلی دوره الزامی است')
        .min(70, 'توضیحات اصلی باید حداقل ۷۰ کاراکتر باشد'),

    // =========================
    // Step 4
    // =========================

    image: yup
        .mixed()
        .required('انتخاب عکس دوره الزامی است')
        .test(
        'fileType',
        'فرمت عکس باید JPG، JPEG، PNG یا WEBP باشد',
        (value) => {
            if (!value) return false

            return [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp'
            ].includes(value.type)
        }
        )
        .test(
        'fileSize',
        'حجم عکس نباید بیشتر از 5MB باشد',
        (value) => {
            if (!value) return false

            return value.size <= 5 * 1024 * 1024
        }
    )
})