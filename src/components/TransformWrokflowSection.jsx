import React from 'react'
import Button from './common/Button'

const TransformWrokflowSection = () => {
  return (
    <section className='gradient text-white s'>

        <div className="wrapper py-20 text-center space-y-4">

            <h3 className='text-3xl font-semibold'> Ready to Transform Your Workflow?</h3>
            <p className='text-gray-300 md:px-20'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

            <div className="flex flex-col md:flex-row  justify-center gap-3 items-center">
                <Button title='Explore Products'/>
                <Button title='View Pricing'/>

            </div>
<p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>


        

    </section>
  )
}

export default TransformWrokflowSection