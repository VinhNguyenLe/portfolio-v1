import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"

import Phone from "../../imgs/phone.png"
import Email from "../../imgs/email.png"
import Address from "../../imgs/address.png"

import "./Contact.css"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_lftf73a",
                "template_9qxjwqi",
                formRef.current,
                "P8Tw3B4TGuNnUs2P2"
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setDone(true)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            0123456789
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            example@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Vietnam
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available
                        for freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="user_name"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    {done && (
                        <p className="c-p-thanks">Thank's for your message!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact
