import React from 'react'
import { CardBody, Badge } from 'reactstrap'

const MoreDetails = ({selectedNews}) => {
    
  if (!selectedNews) return <div>درحال بارگذاری...</div>

  return (
    <CardBody>
        <h4 className='fw-bolder border-bottom pb-50 mb-1 fs-3'>سایر اطلاعات</h4>
        <div className='info-container'>
        {selectedNews !== null ? (
            <ul className='list-unstyled'>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>عنوان گوگل:</span>
                <span> {selectedNews?.googleTitle} </span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد علاقه‌مندی‌ها:</span>
                <span>{selectedNews?._count?.newsFavorite}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد نظرات:</span>
                <span>{selectedNews?._count?.newsComment}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد لایک:</span>
                <span>{selectedNews?.currentLikeCount}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تعداد دیس‌لایک:</span>
                <span>{selectedNews?.currentDissLikeCount}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>امتیاز خبر:</span>
                <span>{selectedNews?.newsRate?.avg}</span>
            </li>
            </ul>
        ) : null}
        </div>
    </CardBody>
  )
}

export default MoreDetails