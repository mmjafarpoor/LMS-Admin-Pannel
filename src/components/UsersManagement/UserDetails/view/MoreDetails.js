import React from 'react'
import { CardBody, Badge } from 'reactstrap'
import { toShamsiDate } from "../../../../utility/dateFormatter"

const MoreDetails = ({selectedUser}) => {
    
  if (!selectedUser) return <div>درحال بارگذاری...</div>

  return (
    <CardBody>
        <h4 className='fw-bolder border-bottom pb-50 mb-1 fs-3'>سایر اطلاعات</h4>
        <div className='info-container'>
        {selectedUser !== null ? (
            <ul className='list-unstyled'>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>درباره کاربر:</span>
                <span>{selectedUser?.userAbout}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>کد ملی:</span>
                <span>{selectedUser?.nationalCode}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>محل سکونت:</span>
                <span>{selectedUser?.homeAdderess}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>تاریخ تولد:</span>
                <span>{toShamsiDate(selectedUser?.birthDay)}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>درصد تکمیل پروفایل:</span>
                <span> {selectedUser?.profileCompletionPercentage}% </span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>آدرس تلگرام:</span>
                <span> {selectedUser?.telegramLink}</span>
            </li>
            <li className='mb-75'>
                <span className='fw-bolder me-25 fs-4'>آدرس لینکدین:</span>
                <span>{selectedUser?.linkdinProfile}</span>
            </li>
            </ul>
        ) : null}
        </div>
    </CardBody>
  )
}

export default MoreDetails