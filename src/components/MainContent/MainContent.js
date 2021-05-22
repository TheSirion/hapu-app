import React from 'react'
import Image from 'react-bootstrap/Image'

import Section from '../Section/Section'
import CtaForm from '../CtaForm/CtaForm'

import './MainContent.css'
import ImageSection1 from '../../assets/images/png/ImageSection1.png'
import ImageSection3 from '../../assets/images/png/ImageSection3.png'
import ImageSection4 from '../../assets/images/png/ImageSection4.png'
import ImageSection5 from '../../assets/images/png/ImageSection5.png'

const MainContent = () => {
  return (
    <main className="px-0">
      {/* SECTION 1 */}
      <Section divider>
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between align-items-stretch order-2 order-lg-1 text-center text-lg-left px-0">
            <h2 className="display-2 mb-3">
              Share your home, <br /> nanny and costs
            </h2>
            <p className="section-1-text">
              You have a fantastic home, a fantastic nanny and wouldn’t cutting
              your costs in half be, well, fantastic?! If only it was easy to
              connect with other parents to share your costs? Well now it is,
              with Hapu.{' '}
              <a href="#" className="link">
                Hapu means tribe
              </a>{' '}
              and it’s our foundational 3 tribal principles that empowers you to
              create and manage your own tribe. A tribe that together has the
              power to create new affordable solutions in childcare that work
              for you and your community.
            </p>
            <a href="#" className="link">
              Ready to get started?
            </a>
          </div>
          <div className="col-12 col-lg-6 p-auto order-1 order-lg-2 px-0 mb-4">
            <Image
              src={ImageSection1}
              alt="section one"
              className="d-block m-auto"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 2 */}
      <Section divider>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h3 className="display-3">
              Are you a parent without a nanny and looking to share?
            </h3>
            <h6>
              Leave us your name and email and we’ll update you as soon as a
              share becomes available in your area!
            </h6>
          </div>
          <CtaForm />
        </div>
      </Section>

      {/* SECTION 3 */}
      <Section divider>
        <div className="d-flex flex-column flex-lg-row section-3">
          <div className="col-12 col-lg-6 px-0">
            <Image
              src={ImageSection3}
              alt="shared payment demo"
              className="w-100"
            />
          </div>
          <div className="col-12 col-lg-6 px-0">
            <h2 className="display-2">Shared payments made simple</h2>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill. Try
              sharing that bill week in, week out and you might encounter more
              than a few snares. But not with Hapu. Simply set your rates and
              our automated payment system takes care of the rest. You need
              never talk money or who owes what.
            </p>
            <a href="#">
              Read how Bridget’s share (without Hapu) ended over $15
            </a>
          </div>
        </div>
      </Section>

      {/* SECTION 4 */}
      <Section divider>
        <div className="d-flex flex-column text-center">
          <h2 className="display-2">A framework built for the long term</h2>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <a href="#">Read how Hapu’s tribal background defines our app</a>
          <Image src={ImageSection4} className="d-none d-lg-block" />
        </div>
      </Section>

      {/* SECTION 5 */}
      <Section>
        <div className="text-center">
          <Image src={ImageSection5} />
          <h2 className="display-2">Coming soon: Nanny Share Daily Diary!</h2>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </div>
      </Section>
    </main>
  )
}

export default MainContent