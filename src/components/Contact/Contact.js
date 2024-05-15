// import "./Contact.css";

import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../Particle'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
// import Send from "./Send";
export default function Contact ({ ackee }) {
  const [message, setMessage] = useState('')
  const onClick = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value.toString(),
      name: e.target.name.value.toString(),
      body: message
    }
//  ackee.action('e49da181-1b12-4db4-8296-35ec26a8f1a9', {
//   key: `${data.name} (${data.email})`,
//   value: 1
// })
    fetch(process.env.REACT_APP_BACKEND_URL + '/submit_form', {
      method: 'POST',
      body: JSON.stringify(data),
    //  headers
      headers: {
        'Content-Type': 'application/json',
      // "X-CSRF-TOKEN": submitToken
        Authorization: process.env.REACT_APP_BACKEND_TOKEN
      }
    })
  .then((r) => r.json())
  .then((data) => {
    //  ...
    if (data.status === 201) {
      alert('Email sent successfully')
    }
  })
  }
  return <div className='min-h-screen pt-20 hero'>
    <Particle />
    <div className='text-center hero-content'>
      <div className='max-w-sm lg:max-w-7xl md:max-w-lg'>
        <h1
          className='text-5xl font-bold text-white'

      >
        Contact
      </h1>
        <p className='py-6 text-white'>Contact me</p>
        <div className='flex-shrink-0 w-full max-w-sm p-5 shadow-2xl bg-base-300 bg-opacity-40'>
          <form onSubmit={onClick}>
            <div >
              <div className=''>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  name='email'
                  className='text-white bg-opacity-50 input input-bordered'
                  required
              />
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='name'
                  name='name'
                  className='text-white bg-opacity-50 input input-bordered'
                  required
              />
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text'>Message</span>
                </label>
                {/* <textarea
                name="editor"
                id=""
                className="text-white bg-opacity-50 input input-bordered"
                required
              ></textarea> */}
                <Editor
          // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
                  initialValue=''
                  init={{
                    branding: false,
                    height: 400,
                    menubar: true,
                    plugins:
              'searchreplace autolink directionality visualblocks visualchars image link media codesample table charmap  pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  ',
                    toolbar:
              'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
                    image_advtab: true,
            // theme: "dark",
                    skin: 'oxide-dark',
                    content_css: 'dark'
                  }}
                  apiKey={process.env.REACT_APP_TINY_API_KEY}
                  onChange={(e) => setMessage(e.target.getContent())}
        />

              </div>
              <button
                className='m-5 ml-10 text-white my-custom-button'
                type='submit'
                id='submit_button'
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    // return <>
    //     <Container  className="pt-20 hero" >
    //   <Particle />
    //   <Container  className=" hero-content">
    //   <Container  className="max-w-md ">

    //       <h1 className="text-5xl font-bold" style={{ color: "white" }}>
    //      Contact Me
    //     </h1>
    //     <p style={{ color: "white" }}>
    //     You can use this form to contact me!
    //     </p>
    //     <Row  className="text-center">
    //   <div className="flex-shrink-0 w-full max-w-xs bg-transparent shadow-2xl card">
    //     <form id="sendemail">
    //       <div className="card-body">
    //         <div className="max-w-sm bg-transparent bg-opacity-90">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="email"
    //             name="email"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="name"
    //             name="name"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="">
    //           <label className="label">
    //             <span className="label-text">Message</span>
    //           </label>
    //           <textarea
    //             name="editor"
    //             id=""
    //             cols="30"
    //             rows="10"
    //             className="input input-bordered"

    //             required
    //           ></textarea>
    //         </div>
    //         <button
    //           className="m-5 ml-10 btn btn-neutral"
    //           type="submit"
    //           id="submit_button"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //     </Row>
    //   </Container>
    //   </Container>
    // </Container></>
}
