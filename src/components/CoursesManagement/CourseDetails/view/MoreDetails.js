import React from 'react'
import { CardBody, Badge } from 'reactstrap'

const MoreDetails = ({selectedCourse}) => {
    
  if (!selectedCourse) return <div>درحال بارگذاری...</div>

  return (
    <CardBody>
        <h4 className='fw-bolder border-bottom pb-50 mb-1 fs-3'>سایر اطلاعات</h4>
        <div className='info-container'>
        {selectedCourse !== null ? (
            <ul className='list-unstyled'>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>عنوان گوگل:</span>
                <span> {selectedCourse?.googleTitle} </span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد نظرات:</span>
                <span>{selectedCourse?.courseCommentTotal}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد لایک:</span>
                <span>{selectedCourse?.likeCount}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد دیس‌لایک:</span>
                <span>{selectedCourse?.dissLikeCount}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>امتیاز دوره:</span>
                <span>{selectedCourse?.courseRate}</span>
            </li>
            </ul>
        ) : null}
        </div>
    </CardBody>
  )
}

export default MoreDetails